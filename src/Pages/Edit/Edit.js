import blog from '../../API/blog'

export default {
  data() {
    return {
      blogId: null,
      title: '',
      description: '',
      content: '',
      atIndex: true
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId}).then(res => {
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    })
  },
  methods: {
    onEdit() {
      blog.updateBlog({blogId: this.blogId}, {
        title: this.title,
        description: this.description,
        content: this.content,
        atIndex: this.atIndex
      }).then(res => {
        this.$message.success('更新成功')
        this.$router.push({path: `/detail/${res.data.id}`})
      })
    },
  }
}
