import blog from '../../API/blog'
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.page = parseInt(this.$route.query.page || '1') || '1'
    this.getBlog(this.user.id, {page: this.page})
  },
  methods: {
    onChange(newPage) {
      this.getBlog(this.user.id, {page: newPage})
      this.$router.push({path: '/my', query: {page: newPage}})
    },
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
        this.page = res.page
        this.total = res.total
      })
    },
    onDelete(blogId) {
      this.$confirm('此操作不可恢复，确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        blog.deleteBlog({blogId}).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
          this.blogs = this.blogs.filter(blog => blog.id !== blogId)
        })
      })
    },
  }

}


