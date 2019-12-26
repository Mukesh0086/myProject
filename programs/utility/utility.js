var read = require('readline-sync')

/*
 * @description : Find the Element in an array suing binary search 
 * @param {array, length}, which has data information
 * @return {found element}, displays data
 */
binarysearch = (arr, x) => {
    try {
        let l = 0;
        let r = arr.length - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] == x)
                return mid;
            if ((arr[mid]) < x) {
                l = mid + 1;

            } else {
                r = mid - 1;
            }
        }
        return -1;
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}



/*
 * @description : sort the array isneration serach 
 * @param {array}, which has data information
 * @return {sorted array}, displays data
 */

insertionsearch = (array) => {
    try {
        let n = array.length;
        for (let j = 1; j < n; j++) {
            let key = array[j];
            let i = j - 1;
            while ((i > -1) && (array[i] > key)) {
                array[i + 1] = array[i];
                i--;
            }
            array[i + 1] = key;

        }
        console.log(array)

    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}



/*
 * @description : sort the array by using  bubblesort
 * @param {array}, which has data information
 * @return {sorted array}, displays data
 */
bubblesearch = () => {
    try {
        let array = read.question('enter the elements')
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
            }

        }
        console.log(array)
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }


}




/*
 * @description : chcek whther the string is anagram of other
 * @param {02 arrays }, which has data information
 * @return {whther the string is anagram of otheror not}, displays data
 */
anagram = (arr1, arr2) => {
    try {
        if (arr1.length != arr2.length)
            return -1
        else {
            let string1 = arr1.split('').sort().join('')
            let string2 = arr2.split('').sort().join('')
            return (string1 == string2)
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }


}



/*
 * @description : find the prime number in a given range
 * 
 * @return {array of prime numbers}, displays data
 */

primenumbers = () => {
    try {
        let b

        for (let i = 2; i <= 1000; i++) {
            b = true
            for (let j = 2; j <= i - 1; j++) {

                if (i % j == 0) {
                    b = false
                    break
                }
            }
            if (b) {

                console.log(i)
            }

        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }


}


/*
 * @description : find the prime numbers taht are palindome in a given range
 * @param {prime numbsers}, which has data information
 * @return {array of prime numbers taht are palindome }, displays data
 */


primePalindrome = () => {
    try {
        let b

        for (let i = 2; i <= 1000; i++) {
            b = true
            for (let j = 2; j <= i - 1; j++) {

                if (i % j == 0) {
                    b = false
                    break
                }
            }
            if (b && Palindrome(i)) {

                console.log(i);
            }

        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}


Palindrome = (i) => {
    try {

        let temp = i;
        let sum = 0;
        while (temp != 0) {
            let r = temp % 10;
            sum = sum * 10 + r;
            temp = parseInt(temp / 10);

        }
        if (sum == i) {
            return 1
        }

    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}






/*
 * @description : sort the array isneration serach 
 * @param {array}, which has data information
 * @return {sorted array}, displays data
 */

mergeSort = () => {
    function merge(left, right) {
        let arr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }
        return arr.concat(left.slice().concat(right.slice()));
    }

    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
    }
    let arr = [9, 14, 3, 2, 43, 11, 58, 22]
    console.log(mergeSort(arr));
}

/*
 * @description : find permutaions of string
 * @param {02 strings}, which has data information
 * @return {permuated string} , displays data
 */
recursive = (str, ans) => {
    if (str.length == 0) {
        console.log(ans + " ");
        return;
    }

    for (let i = 0; i < str.length; i++) {

        // ith character of str 
        let ch = str.charAt(i);

        // Rest of the string after excluding  
        // the ith character 
        let ros = str.substring(0, i) +
            str.substring(i + 1);

        // Recurvise call 
        recursive(ros, ans + ch);

    }
}

/*
 * @description : find number by guessing 
 * @param { enetred number}, which has data information
 * @return {number guseed which matches  enetred number}, displays data
 */
numberGuess = (number) => {
    var n = 1;

    for (var i = 1; i <= number; i++) {
        n = n * 2;
    }
    var min = 0;
    var max = n;
    var guess = min + max / 2;
    var input = 0;
    var tries = 1;
    if (max >= min) {
        while (input != 1) {

            console.log("1.Is your number" + guess + "?");
            console.log("2.Is your number higher than " + guess + "?");
            console.log("3.Is your number lower than " + guess + "?");
            // input = sc.nextInt();
            var input = read.question("enter The input:");

            if (input == 2) {
                min = guess;
                guess = min + (max - guess) / 2;
                tries++;
            } else if (input == 3) {
                max = guess;
                guess = min + (guess - min) / 2;
                tries++;
            }

        }
    }
    console.log(tries + " tries required to find " + Math.floor(guess));
    return tries;

}


module.exports = {
    binarysearch,
    insertionsearch,
    bubblesearch,
    anagram,
    primenumbers,
    primePalindrome,
    Palindrome,
    mergeSort,
    recursive,
    numberGuess


}