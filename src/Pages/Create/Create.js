import request from '../../helpers/request'
import auth from '../../API/auth'

window.request = request
window.auth = auth


export default {
  data() {
    return {
      n: 0
    }
  }
}
