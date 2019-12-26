/*
 * @description :to find prime numbers and displying in 2D array
 * @return { array of primenbers}, displays data
 */

//funrtion to genrate prime numbers
primenumbers = (n) => {
    let arr1 = [];
    for (let i = 1; i < n / 100; i++) {
        let arr = [];
        for (let j = i * 100; j <= (i + 1) * 100; j++) {
            if (Prime(j))
                arr.push(j);
        }
        arr1.push(arr);
    }

    // displying prime numbsers in 2D array
    arr1.forEach(a => {
        var str = " ";
        a.forEach(b => {
            str = str + b + " ";
        })
        console.log(str);
    })
}
Prime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
module.exports = {
    primenumbers
}