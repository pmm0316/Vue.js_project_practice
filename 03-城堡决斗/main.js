new Vue({
  name: 'game',
  el: '#app',
  data: state,
  computed: {
    testCard() {
      return cards.archers
    }
  },
  template: `
    <div id="app">
       <top-bar
       :players="players"
       :current-player-index="currentPlayerIndex"
       :turn="turn"/>
       <card :def="testCard" @play="handlePlay"/>
       <transition name="fade">
        <hand :cards="testHand" v-if="!activeOverlay"/>
       </transition>      
    </div>
  `,
  methods: {
    handlePlay(a) {
      console.log(a)
    },
    createTestHand() {
      const cards = []
      for (let i = 0; i < 5; i++) {
        cards.push(this.testDrawCard())
      }
      return cards
    },
    testDrawCard() {
      const ids = Object.keys(cards)
      let randomId = ids[Math.floor(Math.random() * ids.length)]
      return {
        uid: cardUid++,
        id: randomId,
        def: cards[randomId]
      }
    }
  },
  created() {
    this.testHand = this.createTestHand()
  }
})
// 监听窗口的大小变化
window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio()
})