const phone = {
    "2": ["a","b","c"],
    "3": ["d","e","f"],
    "4": ["g","h","i"],
    "5": ["j","k","l"],
    "6": ["m","n","o"],
    "7": ["p","q","r","s"],
    "8": ["t","u","v"],
    "9": ["w","x","y","z"]
}

/** @param {Array} digitos */
const size = (digitos) => {
    if (digitos.length < 5) {
        return digitos.length >= 0;
    }
    return false;
}

/** @param {Array} digitos */
const verifyDigit = (digitos) => {
    let valid = true;
    digitos.forEach((digit) => {
        if (digit >  9 || digit < 2) {
            valid = false;
        }
    })
    return valid;
}

/** @param {Array} array */
const merge = function(array) {
    let combination = [""];
    array.forEach((digit) => {
        // console.log(newArray);
        let tempArray = [];
        combination.forEach((str) => {
            phone[digit].forEach((newStr) => {
                tempArray.push(str + newStr);
                // console.log(newArray);
            });
        });
        combination = [...tempArray];
        // console.log(tempArray);
    });
    return combination;
}

/** @param {Array} array */
function combine(array) {
    console.log(array);
    let combinedArray = merge(array);
    console.log(combinedArray);
    return combinedArray;
}

/** @param {String} digitos */
function restrictions(digitos) {
    const array = digitos.split("");
    if (!size(array)) {
        return console.log("El array debe tener menos de 5 digitos");
    }
    if (!verifyDigit(array)) {
        return console.log("Solo se aceptan numeros del 2 al 9");
    }
    if (array.length == 1) {
        return array;
    }
    // console.log(array);
    return combine(array);
}

restrictions("23");
// restrictions("32");
// restrictions("79");
// restrictions("1");
// restrictions("10");
// restrictions("2345");
// restrictions("");