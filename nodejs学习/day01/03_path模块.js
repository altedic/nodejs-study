const path = require('path')
const fs = require('fs')

// 1、path.join()
const pathStr1 = path.join('/a', '/f/c/x', '../../', 'e', 'e', './s')
console.log(pathStr1)

const pathStr2 = path.join(__dirname, '/files/1.txt')

//异步函数
fs.readFile(pathStr2, 'utf-8', (err, str) => {
    console.log(err ? `读取失败，err:${err}` : `读取成功，读取结果是：\n${str}`)
})


console.log('-------------------------------------------')


// 2、path.basename()
const filepath = 'a/b/c/index.html'
const filefullname = path.basename(filepath)
console.log(filefullname)

//移除文件的扩展名，需要加入第二个参数
const filename = path.basename(filepath, '.html')
console.log(filename)