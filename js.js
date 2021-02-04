
/**
 * All Arrays
 * @param {string} DayofMonth - Array with the Data for the Calender
 */
let DayofMonth =  ["//FILLER//", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
DayofMonth = getArray("DayofMonth");



/**
 * saves a Array to the Localstorage
 * @param {string} key 
 * @param {array} DayofMonth 
 * */
function setArray(key, value) {  
        localStorage.setItem(key, JSON.stringify(value));
}
/**
 * load a Array out of the Localstorage
 * @param {string} key 
 */
function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}
/**
 * initiat the start of all Functions to 
 * start the Application
 * @function ChecktheLocalstorageLength()
 * @function getTime()
 * @function getCalenderData()
 * @function getDate()
 * @function getOption()
 */
function init(){
    ChecktheLocalstorageLength();
    getTime();
    getCalenderData();
    getDate();
    getOption();
}



/**
 * Checking the length of LocalStorage
 * if length == 0 
 * filling the @var DayofMonth with @var DayofMonth
 * and run the @function setArray()
 * and set the @var DayofMonth to get the localstorage
 */
function ChecktheLocalstorageLength(){
        if (localStorage.length == 0) {
            DayofMonth =  ["//FILLER//", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
            setArray("DayofMonth", DayofMonth);
            DayofMonth = getArray("DayofMonth");

        }
    }


/**
 * fill the 30 Cells of the Calender 
 * with inserting the HTML by run
 * @function getData(@param {string} i)
 */
function getCalenderData() {
    for (let i = 1; i < 31; i++) {
        getArray("DayofMonth");
        document.getElementById("month").innerHTML += getData(i);
        // if (typeof DayofMonth[i] == "") {
        //     document.getElementById("post").innerHTML = "test"
        // }
    }
}
/**
 * generating the 30 Cells in the Calender by
 * @returns the id and classes needed  
 * @param {string} i needet for the next function
 * @function getCalenderData() 
 */
function getData(i) {
    return `<div   class="day">
            <p id="date" class="date">${i}</p>
            <p  id="post">${DayofMonth[i]}</p>
            </div>`
}

/**
 * defines 2 Variables
 * used to update the Reminder in the Cells
 * @var {string} TEXT - the Value of "text"
 * @var {number} DAY -  the value of "SelectDay"
 * Slice @var TEXT  in the Position of @var DAY 
 * in the Array @param DayofMonth
 * saves the Array @param DayofMonth with the Key DayofMonth
 * in the LocalStorage
 * clearing the the value  of the input
 * clearing the old inserted datas
 * and run @function getCalenderData() to refresh the Calender
 * refresh the localstorage Array
 */

function getInputData(i) {
    let TEXT = document.getElementById("text").value;
    let DAY = document.getElementById("SelectDay").value;
    DayofMonth.splice(DAY, 1, TEXT);
    document.getElementById("text").value = "";
    document.getElementById("month").innerHTML = "";
    getCalenderData();
    setArray("DayofMonth", DayofMonth);
}
/**
 * generating the Time
 * and update every 0.05 seconds
 * and inserting it into the HTML
 * @var {number} HOURS - Actual Time
 * @var {number} MINUTES - Actual Minutes
 * @var {number} SECONDS - Actual Seconds
 * @var {number} SECONDSplus - Adding a "0" if seconds is smaller then 10 
 */
function getTime() {
    setInterval(() => {
        let HOURS = new Date().getHours();
        let MINUTES = new Date().getMinutes();
        let SECONDS = new Date().getSeconds();
        let SECONDSplus = "0";
        if (SECONDS > 10) {
            SECONDSplus = "";
        }
        document.getElementById("time").innerHTML = "Uhrzeit: " + HOURS + ":" + MINUTES + ":" + SECONDSplus + SECONDS;

    }, 50);
}
/**
 * generating the Date
 * and  update every 0.05 seconds
 * and inserting it into the HTML 
 *  @var {number}  DAY - Actual Day
 *  @var {number} MONTH - Actual Month
 *  @var {number} YEAR - Actual Year
 */
function getDate() {
    setInterval(() => {
        let DAY = new Date().getUTCDate();
        let MONTH = new Date().getUTCMonth() + 1;
        let YEAR = new Date().getUTCFullYear();
        document.getElementById("actual_date").innerHTML = "Datum: " + DAY + "." + MONTH + "." + YEAR;
    }, 50);
}
/**
 * Iterrating from 1 to 31 
 * and Creating the options of the Selectiontag
 * with the list of 1-30
 */
function getOption() {
    for (let i = 1; i < 31; i++) {
        document.getElementById("SelectDay").innerHTML += `
        <option value="${i}">.${i}</option>`
    }

}


/**
 * on onload the window
 * starting @function init()
 * and @function getArray()
 */
window.onload = function () {
    init();
    getArray("DayofMonth");
   
   
}