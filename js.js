
let DayofMonth = ["//FILLER//","lorem ipsum","","", "", "", "", "","","", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

/**
 * saves a Array to the Localstorage
 * @param {string} key 
 * @param {array} DayofMonth 
 */



function setArray(key, DayofMonth){
    localStorage.setItem(key, JSON.stringify(DayofMonth));
}
/**
 * load a Array out of the Localstorage
 * and give a empty Array if the first Statement is not available
 * @param {string} key 
 */
function getArray(key){
    return   JSON.parse(localStorage.getItem(key)) || [] ;
}

/**
 * fill the 30 Cells of the Calender 
 * with inserting the HTML by run
 * @function getData(@param {string} i)
 */
function getCalenderData() {
    let date = 1;
    for (let i = 1; i < 31; i++) {

        document.getElementById("month").innerHTML += getData(i);
        // if (typeof DayofMonth[i] == "") {
        //     document.getElementById("post").innerHTML = "test"
        // }
    }
}

/**
 * defines 2 Variables
 * used to update the Reminder in the Cells
 * @param {string} TEXT - the Value of "text"
 * @param {number} DAY -  the value of "SelectDay"
 * Slice @param TEXT  in the Position of @param DAY 
 * in the Array @param DayofMonth
 * and run @function getCalenderData() to refresh the Calender
 */

function getInputData(i) {
    let TEXT = document.getElementById("text").value;
    let DAY = document.getElementById("SelectDay").value;
    DayofMonth = getArray("DayofMonth", DayofMonth);
    DayofMonth.splice(DAY, 1, TEXT);
    setArray("DayofMonth",DayofMonth);
    document.getElementById("text").value = "";
    getCalenderData();
    
}
/**
 * generating the 30 Cells ins the Calender by
 * @returns the id and classes needed  
 * @param {string} i needet for the next function
 * @function getCalenderData() 
 */

function getData(i) {
    return `<div   class="day">
            <p id="date" class="date">${i}</p>
            <p  id="post">${DayofMonth[i]}</p></div>`
}
/**
 * generating the Time
 * and update every 0.05 seconds
 * and inserting it into the HTML
 * @param {number} HOURS - Actual Time
 * @param {number} MINUTES - Actual Minutes
 * @param {number} SECONDS - Actual Seconds
 */
function getTime() {
    setInterval(() => {
        let HOURS = new Date().getHours();
        let MINUTES = new Date().getMinutes();
        let SECONDS = new Date().getSeconds();
        document.getElementById("time").innerHTML = "Uhrzeit: " + HOURS + ":" + MINUTES + ":" + SECONDS;

    }, 50);
}
/**
 * generating the Date
 * and  update every 0.05 seconds
 * and inserting it into the HTML 
 *  @param {number}  DAY - Actual Day
 *  @param {number} MONTH - Actual Month
 *  @param {number} YEAR - Actual Year
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
 * is a Initiator to start the App
 * and run all required functions
 * @function getTime();
 * @function getCalenderData();
 * @function getDate();
 * @function getOption();
 */
window.onload = function () {
    getTime();
    getCalenderData();
    getDate();
    getOption();

}