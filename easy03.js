const parentheses = {
    "{": "}",
    "[": "]",
    "(": ")"
}

/** @param {String} str */
function validParenthesis(str) {
    if (str.length % 2 != 0) {
        console.log("false");
        return false;
    }
    const arr = str.split("");
    for (let i = 0; i < arr.length - 1; i++) {
        let index = i + 1;
        while (index < arr.length) {
            const rightParenthesis = arr[index];
            // console.log("Parentesis: ", rightParenthesis, "indice: ", index);
            if (rightParenthesis == parentheses[arr[i]]) {
                // console.log("Parentesis: ", arr[i], " si tiene pareja");
                if ((index - 1) == i) {
                    // console.log("Estan seguidos");
                    i = index;
                    // index = arr.length;
                    break;
                }
                // index = arr.length;
            } else if (index == arr.length - 1) {
                // console.log("Parentesis: ", arr[i], " no tiene de pareja");
                console.log("false");
                return false;
            }
            index++;
        }
    }
    console.log("true");
    return true;
}

// validParenthesis("{]}");
// validParenthesis("{}");
// validParenthesis("{[)}");
// validParenthesis("{[]}");
// validParenthesis("{");
// validParenthesis("{[}");
// validParenthesis("{}([])");
// validParenthesis("{()}[]");