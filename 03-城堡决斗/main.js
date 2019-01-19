new Vue({
  name: 'game',
  el: '#app',
  data: state,
  template: `
    <div id="app">
       <top-bar
       :players="players"
       :current-player-index="currentPlayerIndex"
       :turn="turn"/>
    </div>
  `
})
// 监听窗口的大小变化
window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio()
})