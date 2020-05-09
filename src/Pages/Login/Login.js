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
    onLogin: function () {
      this.login({username: this.username, password: this.password})
        .then(
          () => {this.$router.push({path: this.$route.query.redirect || '/'})},
          (res) => {
            this.msg = res.msg
          }
        )
    }
  }
}
