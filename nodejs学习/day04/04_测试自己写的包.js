const path = require('path')

// const italtedic = require(path.join(__dirname, '../../italtedic-tools/index'))
// 不指定固定的文件时，会搜索package.json的main属性，如下：！！！！！
const italtedic = require(path.join(__dirname, '../../italtedic-tools'))

// 1、测试日期转换
const dt = italtedic.dateFormat(new Date())
console.log(dt)

// 2、测试HTML字符串转换
const htmlstr = '<h1 title="alte">这是一个HTML标签<span>123&nbsp;</span></h1>'
const str = italtedic.htmlEsaape(htmlstr)
console.log(str)

// 3、测试还原HTML字符串
const str2 = italtedic.htmlUnEscape(str)
console.log(str2)