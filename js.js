
let DayofMonth = ["//FILLER//","","","", "", "", "", "","","", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

/**
 * This function saves the Array to the Localstorage
 * @param {string} key 
 * @param {array} DayofMonth 
 */
function setArray(key, DayofMonth){
    localStorage.setItem(key, JSON.stringify(DayofMonth));
}
/**
 * This function load the Array out of the Localstorage
 * and give a empty Array if the first Statement is not available
 * @param {string} key 
 */
function getArray(key){
    return   JSON.parse(localStorage.getItem(key)) || [] ;
}

/**
 * This function fill the 30 Cells of the Calender 
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
 * This function defines 2 Variables
 * used to update the Reminder in the Cells
 * @param {*} i 
 */

function getInputData(i) {
    let TEXT = document.getElementById("text").value;
    let DAY = document.getElementById("SelectDay").value;
    DayofMonth.splice(DAY, 1, TEXT);
    document.getElementById("text").value = "";
    document.getElementById("month").innerHTML = "";
    getCalenderData();
    
}
/**
 * This function generating the 30 Cells ins the Calender by
 * @returns the id and classes needed  
 * @param {string} i needet for the next function
 * @function getCalenderData() 
 */

function getData(i) {
    setArray("DayofMonth", DayofMonth);
    return `<div  id="day" class="day">
            <p id="date" class="date">${i}</p>
            <p  id="post${i}">${(getArray(DayofMonth))}</p>
        </div>`
}
/**
 * This function generating the Time
 * and update every 0.05 seconds
 * and inserting it into the HTML
 * @param {number} HOURS - get the Actual Hour with the TimeLIbary
 * @param {number} MINUTES - get the Actual Minute with the TimeLIbary
 * @param {number} SECONDS - get the Actual Second with the TimeLIbary
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
 * This function generating the Date
 * and  update every 0.05 seconds
 * and inserting it into the HTML 
 *  @param {number}  DAY - get the Actual Day with the TimeLIbary
 *  @param {number} MONTH - get the Actual Month with the TimeLIbary
 *  @param {number} YEAR - get the Actual Year with the TimeLIbary
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
 * This function Iterrating from 1 to 31 
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
 * This function is a Initiator to start the App
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