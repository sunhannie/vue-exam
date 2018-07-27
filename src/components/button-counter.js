// 定义一个名为 button-counter 的新组件。js和vue怎么连接起来使用
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button>You clicked me {{ count }} times.</button>'
})

