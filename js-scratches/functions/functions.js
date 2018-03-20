/* Kebab To Snake */
function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1);
}

function factorialCool(num) {
    return num === 0 ? 1 : num * factorialCool(num - 1);
}

console.log(factorial(5));
console.log(factorialCool(5));

/* Kebab To Snake */
function kebabToSnake(kebab){
    return kebab.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world-all"));

const kebabToSnakeFun = kebab => kebab.replace(/-/g, "_");

console.log(kebabToSnakeFun("hello-world-all"));
