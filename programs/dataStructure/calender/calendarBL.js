/*
 * @description :  to generate calender
 * @return { calender}, displays data
 */


dayOfWeek = (d, m, y) => {
    try {
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
        let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return d0;

    } catch (e) {
        console.log(e.message);

    }

}
leapYear = (year) => {
    if (year > 999 && year < 10000) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
            console.log(year + " is leap year");
        else
            console.log(year + " is not leap year");
    } else {
        console.log("In-valid input");
    }
}


calendar = (d0, md) => {
    let matrix = [];
    matrix.push(["sun", "mon", "tue", "wed", "thu", "fri", "sat"]);
    let k = 1;
    for (i = 1; i < 7; i++) {
        let date = [];
        for (j = 0; j < 7; j++) {
            if (k <= md && j >= d0) {
                if (k > 9) date.push(k + ' ');
                else date.push(' ' + k + ' ');
                k++;
                d0 = d0 - 7;
            } else date.push(' ');
        }
        matrix.push(date);
    }
    return matrix;
}

module.exports = {
    calendar,
    leapYear,
    dayOfWeek


}
//--------------------------------------------------------------------------------------------------------------------