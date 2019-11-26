console.log(this === global)
console.log(this === module)


console.log(this === module.exports)
console.log(this === exports)

function Thislog() {

    console.log(this === module.exports)
    console.log(this === global)
    console.log(this === exports)

}

Thislog()
