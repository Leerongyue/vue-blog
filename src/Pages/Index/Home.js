import blog from '../../API/blog'


export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0,
      size:10,
      fuck:true
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page ||'1' ) || '1',
      blog.getBlogs({page: this.page}).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
  },
  methods: {
    // getBlogs()

    onPageChange(newPage) {
      console.log(newPage)
      blog.getBlogs({page: newPage}).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({path: '/', query: {page: newPage}})
      })
    }
  }
}

