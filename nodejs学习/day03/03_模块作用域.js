const username = 'altedic'

function sayHello() {
    console.log(`大家好，我是${username}`)
}

// sayHello()

// console.log(module)

console.log(exports == module.exports)


module.exports.username = username
module.exports.sayHello = function() {
    console.log(`Helloooooooo`)
}

module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hiiiiiiiiiii')
    }
}

module.exports.age = 20
exports.sex = 1

// module.exports和exports的使用误区！！！！
console.log(module.exports)
console.log(exports)
console.log(exports == module.exports)

// 需要注意：require()模块，得到的永远是module.exports指向的对象
// 为了防止混乱，不要在同一个模块中同时使用module.exports和exports