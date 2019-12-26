/*
 * @description :to find prime numbers that are anagrams and displying in 2D array
 * @return { array of primenbers that are anagrams }, displays data
 */

//funrtion to genearate prime numbers that are anagrams 
primeAnagram = () => {
    let start = 1,
        end = 100;
    console.log('prime anagrams are')
    for (let index = 0; index < 10; index++) {
        // var arr = new Array();
        let a = [];
        let b = [];
        for (let n = start; n < end; n++) {
            if (checkPrimeNumber(n)) {
                a.push(n);
            }
        }
        start = start + 100;
        end = end + 100;
        for (let j = 1; j < a.length; j++) {
            for (let k = j + 1; k < a.length; k++) {

                let m = a[j].toString();
                let n = a[k].toString();


                if (checkAnagram1(m, n)) {
                    b.push(m);
                    b.push(n);
                }
            }
        }
        console.log(b.join(',') + "\n");
    }
}

//function to check prime numbers 
checkPrimeNumber = (n) => {
    try {
        if (n == 0 || n == 1) {
            return false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}

//function to check anagrams 
checkAnagram1 = (m, n) => {
    try {

        let a1 = m.split('').sort().join('');
        let a2 = n.split('').sort().join('');
        if (a1 === a2) {
            return true;
        } else
            return false;
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    primeAnagram
}
//----------------------------------------------------------------------------------------------------------------------