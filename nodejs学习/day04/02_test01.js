const TIME = require('./01_npm与包')

const dt = new Date()
console.log(dt)

const newDt = TIME.dateFormat(dt)
console.log(newDt)