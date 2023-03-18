## 安装
```
npm install italtedic-tools
```

## 导入
```js
const italtedic = require('italtedic')
```

## 格式化时间
```js
// 调用dateFormat对时间转换后进行可视化
const dt = italtedic.dateFormat(new Date())
console.log(dt)     // 2023-03-18 21:33:55
```

## 转义HTML中的特殊字符
```js
const htmlstr = '<h1 title="alte">这是一个HTML标签<span>123&nbsp;</span></h1>'
const str = italtedic.htmlEsaape(htmlstr)
console.log(str)    // &lt;h1 title=&quot;alte&quot;&gt;这是一个HTML标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原HTML中的特殊字符
```js
const str2 = italtedic.htmlUnEscape(str)
console.log(str2)   // <h1 title="alte">这是一个HTML标签<span>123&nbsp;</span></h1>
```

## 开源协议
> ISC