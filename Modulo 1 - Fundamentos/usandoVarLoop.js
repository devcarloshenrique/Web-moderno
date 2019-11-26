const funcs = []
for(var a = 0;a <= 10;a++){
    funcs.push(function() {
        console.log(a)
    })
}

funcs[2]()
funcs[10]()



