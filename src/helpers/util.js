const friendlyDate = (dataStr) => {
  let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
  let time = dateObj.getTime()//1375768393583
  let now = Date.now()//1375768393583
  let space = now - time
  let str = ''
  if (space < 60 * 1000) {
    //1分钟以内：刚刚
    str = '刚刚'
  } else if (space < 60 * 60 * 1000) {
    //1小时以内：分钟前
    str = Math.floor(space / (60 * 1000)) + '分钟前'
  } else if (space < 24 * 60 * 60 * 1000) {
    //一天以内:小时前
    str = Math.floor(space / (60 * 60 * 1000)) + '小时前'
  } else {
    //一个月以内：天前
    str = Math.floor(space / (24 * 60 * 60 * 1000)) + '天前'
  }
  return str
}
//Vue插件
export default {
  install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
  }
}


