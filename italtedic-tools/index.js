// 包的入口

const path = require('path')

// 写法一：
const date = require(path.join(__dirname, './src/dateFormat'))
const escape = require(path.join(__dirname, './src/htmlEscape'))

module.exports = {
    ...date,
    ...escape
}

// 写法二：
/* const { dateFormat } = require(path.join(__dirname, './src/dateFormat'))
const { htmlEsaape, htmlUnEscape } = require(path.join(__dirname, './src/htmlEscape'))

module.exports = {
    dateFormat,
    htmlEsaape,
    htmlUnEscape
} */