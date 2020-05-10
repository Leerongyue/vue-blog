import blog from '../../API/blog'
import marked from 'marked'

export default {
  data() {
    return {
      title: '',
      content: '',
      user: {},
      createdAt: ''
    }
  },
  created() {
    const blogId = this.$route.params.blogId
    blog.getDetail({blogId: blogId}).then(res => {
      this.title = res.data.title
      this.content = res.data.content
      this.user = res.data.user
      this.createdAt = res.data.createdAt
    })
  },
  methods: {
    markdown() {
      return marked(this.content)
    }
  }
}
