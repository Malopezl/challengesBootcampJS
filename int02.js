/** @param { Array } nums */
var sum = function(num) {
    const triple = [];

    const isAdded = function(arr) {
        return triple.some(function(triple) {
            return triple[0] == arr[0] && triple[1] == arr[1];
        });
    }

    for (let i = 0; i < num.length - 2; i++) {
        const n1 = num[i];
        for (let j = i + 1; j < num.length - 1; j++) {
            const n2 = num[j];
            for (let k = j + 1; k < num.length; k++) {
                const n3 = num[k];
                if (n1 + n2 + n3 === 0) {
                    const arr = [n1, n2, n3].sort((a,b) => a - b);
                    if (!isAdded(arr)) {
                        triple.push([n1, n2, n3]);
                    }
                }
            }
        }
    }
    return triple;
}

console.log(threesum([-1,0,1,2,-1,-4]));