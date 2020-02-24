function sleep (milliseconds, callBack) {
  new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds)
  }).then(() => {
    callBack()
  })
}
export default {
  sleep
}
