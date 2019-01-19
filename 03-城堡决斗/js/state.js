// Some usefull variables
var maxHealth = 10 // 最大生命值
var maxFood = 10 // 最多食物
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // World
  worldRatio: getWorldRatio(),
  // 回合数
  turn: 1,
  // 玩家
  players: [
    {
      name: 'Anne of Cleves'
    },
    {
      name: 'William the Bald'
    }
  ],
  // 当前玩家的索引
  currentPlayerIndex: Math.round(Math.random())
}
