// 导入http模块
const http = require('http')

// 创建web服务器实例
const server = http.createServer()

// 为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => console.log('some visit our server'))

// 启动服务器   默认端口号为80，可省略
server.listen(80, () => console.log('server running at http://127.0.0.1'))