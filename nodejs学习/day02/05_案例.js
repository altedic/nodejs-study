const http = require('http')
const fs = require('fs')
const path = require('path')

// 创建server实例
const server = http.createServer()

// 监听server的request事件
server.on('request', (req, res) => {
    const url = req.url

    // const fpath = path.join(__dirname, url)
    // 优化路径
    let fpath = ''
    if (url == '/' || url == '/index.html') {
        fpath = path.join(__dirname, './files/index.html')
    } else {
        fpath = path.join(__dirname, './files', url)
    }

    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            return res.end(`404 Not Found, the err is ${err.message}`)
        }
        res.end(dataStr)
    })


})

// 启动服务器
server.listen('80', () => {
    console.log('server running at http://127.0.0.1')
})