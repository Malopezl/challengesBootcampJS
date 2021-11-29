/** @param {Array} digitos */
const size = (digitos) => {
    if (digitos.length < 100) {
        return digitos.length > 0;
    }
    return false;
}

/** @param {Number} digit */
const isZero = (digit) => digit == 0

/** @param {Array} digitos */
const verifyDigit = (digitos) => {
    let valid = true;
    digitos.forEach((digit) => {
        // console.log(digit);
        if (digit >  9 || digit < 0) {
            // console.log("0 < x < 10");
            valid = false;
        }
    })
    // console.log(valid);
    return valid;
}

/** @param {Array} digitos */
const convert = function(digitos) {
    // let digitStr = digitos.join("");
    // console.log(digitStr);
    let num = BigInt(digitos.join(""));
    // console.log(num);
    num+=BigInt(1);
    // let total = num + 1;
    // console.log(total);
    let str = num.toString();
    // console.log(str);
    let arrayNum = str.split("").map((digit) => {
        return parseInt(digit);
    });
    // console.log(arrayNum);
    return arrayNum;
}

/** @param {Array} digitos */
function add(digitos) {
    let newDigitos = convert(digitos);
    console.log("Array final: ", newDigitos);
}

/** @param {Array} digitos */
function restrictions(digitos) {
    console.log("Array inicial: ", digitos);
    if (!size(digitos)) {
        console.log("El array debe tener al menos 1 digito y no puede tener mas de 100 digitos");
        return [];
    }
    if (digitos.length > 1) {
        if (isZero(digitos[0])) {
            console.log("El array no puede contener 0 a la izquierda");
            return [];
        }
    }
    if (!verifyDigit(digitos)) {
        console.log("El valor debe estar entre 0 y 9");
        return [];
    }
    return add(digitos);
}

restrictions([1,2,3])
// restrictions([4,3,2,1])
// restrictions([0])
// restrictions([9])
// restrictions([0,1])
// restrictions([])
// restrictions([10])
// restrictions([-1])