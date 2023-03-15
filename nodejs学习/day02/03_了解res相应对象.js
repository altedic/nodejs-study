const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    const str = `您请求的 url 地址是 ${url}, 请求的 method 是 ${method}`
    console.log(str)

    // 为了防止中文显示乱码的问题，需求设置响应头Content-Type的值为 test/html; charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    // 调用res.end()方法，向客户端相应一些内容
    res.end(str)

})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})