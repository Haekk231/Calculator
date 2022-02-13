const num1 = document.querySelector('.inp1');
const num2 = document.querySelector('.inp2');
let op
const add = document.querySelector('.add');
const result = document.querySelector('.res')

add.addEventListener('click', ()=>{

    let a = Number(num1.value)
    let b = Number(num2.value)
    

    console.log(op);

    if (op == '+') {
        console.log( a + b);
        result.innerText = (a + b);
    } else if (op == '-') {
        console.log( a - b);
        result.innerText = (a - b);
    } else if (op == '*') {
        console.log( a * b);
        result.innerText = (a * b);
    } if  (op == '/') {
        console.log( a / b);
        result.innerText = (a / b);
    }

})