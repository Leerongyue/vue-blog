import {mapActions} from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },

  methods: {
    ...mapActions(['register']),
    onRegister() {
      this.register({username: this.username, password: this.password})
        .then(
          (res) => {
            this.msg = res.msg
            this.$router.push({path: '/'})
          },
          (res) => {this.msg = res.msg}
        )

    },
    change(e) {
      this.$forceUpdate()
    }
  }
}
