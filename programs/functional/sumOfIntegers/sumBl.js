/*
 * @description : sum of distinct elemnts =0
 * @return { distinct elemnts}, displays data
 */

exports.somOf3Integers = () => {
    try {
        let arr = [0, -1, 2, -3, 1]
        const n = arr.length;
        let cnt = 0;

        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {

                for (let k = 0; k < n; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        cnt++
                        console.log('distinct elemnts are' + "[" + arr[i], arr[j], arr[k] + "]");
                    }

                }
            }
        }

        console.log('number of distinct elemnts =' + cnt)
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }


}