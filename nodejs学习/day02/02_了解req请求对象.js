const http = require('http')
const server = http.createServer()

// req为请求对象，包含了客户端相关的数据和属性
server.on('request', (req) => {
    // req.url是客户端请求的url地址
    const url = req.url

    // req.method是客户端请求的method的类型
    const method = req.method

    const str = `Your request url is ${url}, and request method is ${method}`

    console.log(str)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})