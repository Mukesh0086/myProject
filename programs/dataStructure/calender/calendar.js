/********************************************************************
 * @Execution : Desltop/programs/dataStructure/$ calendar.js
 * @description : to generarte calender of specified month and year
 * @Purpose : calender generation
 * @file : calendarBL
 * @author : Noorjan Kinnal <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/

let refer = require('./calendarBL')
let m = parseInt(process.argv[2]);
let y = parseInt(process.argv[3]);
if (0 < m <= 12 && 0 < y <= 9999) {
    d0 = refer.dayOfWeek(1, m, y);
    console.log("day", d0);
}
let md;
if (refer.leapYear(y) && m == 2) {
    md = 29
} else if (!refer.leapYear(y) && m == 2) {
    md = 28
} else if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
    md = 31
} else if ([4, 6, 9, 11].includes(m)) {
    md = 30
}
data = refer.calendar(d0, md);

data.forEach(element => {
    str = "";
    element.forEach(el => {
        str = str + el + ' ';
    })
    console.log(str, '\n');
});
//--------------------------------------------------------------------------------------------------------------------