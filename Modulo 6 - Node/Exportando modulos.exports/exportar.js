console.log(module.exports === this)
console.log(module.exports === exports)


this.a = 1
exports.b = 2

console.log(this.a)
console.log(exports.a)
console.log(module.exports.a)

console.log(this)
console.log(exports)
console.log(module.exports)

// O unico objeto que vai ser exportado como modulo será o module.exports

module.exports = {
    publico: true
}