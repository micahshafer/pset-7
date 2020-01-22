function commonEnd(a, b) {
    if (!a || a.length < 1 || !b || b.length < 1) {
        return false;
    }

    firstA = a[0];
    firstB = b[0];
    lastA = a[a.length - 1];
    lastB = b[b.length - 1];

    if (firstA === firstB) {
        return true;
    } else if (lastA === lastB) {
        return true;
    } else {
        return false;
    }
}

function endsMeet(values, n) {
    let newArray = [];

    if (!values || values.length < n || !(n % 1 === 0) || n <= 0) {
        return newArray;
    } else {
        if (n === 0){
            return values;
        } else {
            for (let x = 0; x < n; x++) {
                if (values[x] !== undefined) {
                    newArray.push(values[x]);
                }
            }

            for (let x = n; x > 0; x--) {
                if (values[values.length - x] !== undefined) {
                    newArray.push(values[values.length - x]);
                }
            }

            return newArray;
        }
    }
}

function difference(numbers) {
    if (!numbers || numbers.some(isNaN) || numbers.length < 1){
        return undefined;
    } else {
        let max = Number(Math.max.apply(null, numbers));
        let min = Number(Math.min.apply(null, numbers));
        let difference = max - min;

        return difference;
    }
}

function max(number) {
    if (!number || number.length % 2 === 0 || number.length < 3 || number.some(isNaN)){
        return undefined;
    } else {
        let newArray = [];
        newArray.push(number[0]);
        let half = Math.floor(number.length/2);
        newArray.push(number[half]);
        let end = number[number.length - 1];
        newArray.push(end);
        let max = Number(Math.max.apply(null, newArray));

        return max;
    }
}

function middle(values) {
    if (!values || values.length % 2 === 0 || values.length < 3){
        return [];
    } else {
        let newArray = [];
        let middle = Math.floor(values.length/2);
        newArray.push(values[middle-1], values[middle], values[middle+1]);

        return newArray;
    }
}

function increasing(numbers) {
    let flag = false;
    if (!numbers || numbers.length < 3 || numbers.some(isNaN)) {
        flag = false;
        return false;
    } else {
        let first;
        let second;
        let third;
        let diff1;
        let diff2;

        for (let i = 0; i < numbers.length - 1; i++) {
            if (Number.isInteger(numbers[i]) === false){
                flag = false;
                return false;
            }
        }

        for (let x = 0; x < numbers.length -2; x++) {
            first = numbers[x];
            second = numbers[x + 1];
            third = numbers[x + 2];
            diff1 = second - first;
            diff2 = third - second;

            if (diff1 === 1 && diff2 === 1) {
                flag = true;
                return true;
            } else {
                //intentially null
            }
        }

        if(flag === true) {
            return true;
        } else if (flag === false){
            return false;
        } else {
            //intentially null
        }
    }
}

function everywhere(values, x) {
    let flag;
    if (!values || values.length < 1 || !x) {
        return false;
    } else {
        for (let y = 0; y < values.length - 1; y++){
            if (values[y].isNaN) {
                flag = false;
                return false;
            }
        }

        let first;
        let second;
        let third;

        for (let i = 0; i < values.length - 1; i++) {
            if (i === 0) {
                if (values[i] === x) {
                    flag = true;
                } else if (values[i + 1] === x) {
                    flag = true;
                } else {
                    flag = false;
                    return false;
                }
            } else if (i === (values.length - 1)) {
                if (values[i] === x) {
                    flag = true;
                } else if (values[i - 1]) {
                    flag = true;
                } else {
                    flag = false;
                    return false;
                }
            } else {
                second = values[i];
                first = values[i - 1];
                third = values[i + 1];

                if (second === x) {
                    flag = true;
                } else if (first === x) {
                    flag = true;
                } else if (third === x) {
                    flag = true;
                } else {
                    flag = false;
                    return false;
                }
            }
        }

        if (flag === false) {
            return false;
        } else {
            return true;
        }
    }
}

function consecutive(numbers) {
    let flag;
    if (!numbers || numbers.length < 3 || numbers.some(isNaN)) {
        flag = false;
        return false;
    } else {
        for (let i = 0; i < numbers.length - 1; i++) {
            if (Number.isInteger(numbers[i]) === false){
                flag = false;
                return false;
            }
        }

        let first;
        let second;
        let third;

        for (let x = 0; x < numbers.length - 2; x++) {
            first = numbers[x];
            second = numbers[x + 1];
            third = numbers[x + 2];

            if (first % 2 === 0 && second % 2 === 0 && third % 2 === 0) {
                flag = true;
                return true;
            } else if (first % 2 === 1 && second % 2 === 1 && third % 2 === 1) {
                flag = true;
                return true;
            }
        }

        if (flag === true) {
            return true;
        } else {
            return false;
        }
    }
}

function balance(numbers) {
    let flag;
    let sum = 0;
    let halfSum;
    let balanceSum = 0;

    if (!numbers || numbers.length < 2 || numbers.some(isNaN)) {
        flag = false;
        return false;
    } else {
        for (let i = 0; i < numbers.length - 1; i++) {
            if (Number.isInteger(numbers[i]) === false){
                flag = false;
                return false;
            }
        }

        for (let x = 0; x < numbers.length; x++){
            sum += numbers[x];
        }

        halfSum = sum / 2;

        if(sum % 2 === 1) {
            flag = false;
            return false;
        }

        for (let z = 0; z < numbers.length - 1; z++) {
            balanceSum += numbers[z];
            if (balanceSum === halfSum) {
                flag = true;
                return true;
            }
        }

        if (flag === true) {
            return true;
        } else {
            return false;
        }
    }
}

function clumps(values) {
    let clumps = 0;
    let flag;
    let lastIndexOfClump;

    if (!values) {
        return -1;
    } else {
        let target;
        let surroundingTarget;

        for (let x = 0; x < values.length - 1; x++) {
            let counter1 = x;
            let counter2 = x + 1;
            target = values[counter1];
            surroundingTarget = values[counter2];

            if (target === surroundingTarget) {
                while (target === surroundingTarget) {
                    target = values[counter1++];
                    surroundingTarget = values[counter2++];
                }

                flag = true;
                lastIndexOfClump = counter1 - 1;
                x = lastIndexOfClump;
                clumps++;
            } else {
                //restart the for loop
            }
        }
        return clumps;
    }
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
