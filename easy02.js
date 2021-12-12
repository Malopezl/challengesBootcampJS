/** @param { String } str */
const strToArr = (str) => str.split("");

/** @param { Array } arr */
const arrToStr = (arr) => arr.join("");

const verify = (a, b) => {
    // console.log(a);
    // console.log(b);
    // console.log(a - b);
    return a - b;
};

/** @param { String } num */
function palindrome(num) {
    console.log("Numero inicial: ", num);
    let array = strToArr(num);
    // console.log(array);
    array.reverse();
    // console.log(array);
    let n = arrToStr(array);
    // console.log(n);
    if (verify(num, n) != 0) {
        console.log("No es palindrome");
        return true;
    }
    console.log("Es palindrome");
    return false;
}

palindrome("121");
palindrome("123");
palindrome("-121");
palindrome("10");