let num1 = 1 
let num2 = 2

//A conta de ++ é feita primeiro que a comparação (===) e a conta de -- é feita depois da comparação(===)
console.log(++num1 == num2--)

num1--
console.log(num1)