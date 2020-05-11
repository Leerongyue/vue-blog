import blog from '../../API/blog'

export default {

  data() {
    return {
      blogs: [],
      user: {},
      total: 0,
      page: 1,
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page || '1') || 1
    this.getBlog(this.$route.params.userId, {page: this.page})
  },
  methods: {
    time(dataStr) {
      const obj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        day: obj.getDate(),
        month: obj.getMonth() + 1,
        year: obj.getFullYear()
      }
    },

    getBlog(id, options) {
      blog.getBlogsByUserId(id, options).then(res => {
        this.blogs = res.data
        if (res.data.length > 0) {
          this.user = res.data[0].user
        }
        this.total = res.total
        this.page = res.page
      })
    },
    onChange(newPage) {
      this.getBlog(this.$route.params.userId, {page: newPage})
      this.$router.push({path: `/user/${this.user.id}`, query: {page: newPage}})
    }
  }
}
