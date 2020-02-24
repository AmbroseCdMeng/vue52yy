/**
 * 自定义指令。数据警告【数值小于 0 或 百分比小于 100% 的情况】
 */
const warningcolor = {
  bind: function (el, binding) {
    const val = el.innerText
    if (/%$/.test(val)) {
      if (val.replace(/%$/, '') < 100) {
        el.style.color = binding.value
      }
    } else {
      if (val < 0) {
        el.style.color = binding.value
      }
    }
  },

  inserted: function (el) {
    el.focus()
  },

  updated: function (el) {}
}
export default {
  warningcolor
}
