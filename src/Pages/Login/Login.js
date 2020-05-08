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
    ...mapActions(['login']),
    onLogin() {
      this.login({username: this.username, password: this.password})
        .then(
          () => {this.this.$router.push({path: '/'})},
          (res) => {
            this.msg = res.msg
          }
        )
    }
  }
}
