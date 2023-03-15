//导入模块
const fs = require('fs')
const path = require('path')

//定义正则表达式
let regStyle = /<style>[\s\S]*<\/style>/
let regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, '/files/index.html'), 'utf-8', (err, str) => {
    if (err) return console.log(`读取文件失败，错误信息为：${err.message}`)

    resolveCSS(str)
    resolveJS(str)
    resolveHTML(str)
})

function resolveCSS(str) {
    //使用正则表达式的match
    let res = str.match(regStyle)[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, '/files/index.css'), res, 'utf-8', (err) => {
        if (err) {
            console.log(`写入css文件失败，错误信息：${err.message}`)
        } else {
            console.log(`写入css文件成功！`)
        }
    })
}

function resolveJS(str) {
    //使用正则表达式的exec
    let res = regScript.exec(str)[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, '/files/index.js'), res, (err) => {
        if (err) {
            console.log(`写入js文件失败，错误信息：${err.message}`)
        } else {
            console.log(`写入js文件成功！`)
        }
    })
}

function resolveHTML(str) {
    const res = str
        .replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
        .replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, '/files/newIndex.html'), res, (err) => {
        if (err) {
            console.log(`写入html文件失败，错误信息：${err.message}`)
        } else {
            console.log(`写入html文件成功！`)
        }
    })
}