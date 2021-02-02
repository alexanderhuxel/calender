
let DayofMonth = ["//FILLER//","","","", "", "", "", "","","", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]


function setArray(key, DayofMonth){
    localStorage.setItem(key, JSON.stringify(DayofMonth));
}

function getArray(key){
    return   JSON.parse(localStorage.getItem(key)) || [] ;
}


function getCalenderData() {
    let date = 1;
    for (let i = 1; i < 31; i++) {

        document.getElementById("month").innerHTML += getData(i);
        // if (typeof DayofMonth[i] == "") {
        //     document.getElementById("post").innerHTML = "test"
        // }
    }
}



function getInputData(i) {
    let TEXT = document.getElementById("text").value;
    let DAY = document.getElementById("SelectDay").value;
    DayofMonth.splice(DAY, 1, TEXT);
    document.getElementById("month").innerHTML = "";
    getCalenderData();
}

function getData(i) {
    setArray("DayofMonth", DayofMonth);
    return `<div  id="day" class="day">
            <p id="date" class="date">${i}</p>
            <p  id="post${i}">${(getArray(i))}</p>
        </div>`
}

function getTime() {
    setInterval(() => {
        let HOURS = new Date().getHours();
        let MINUTES = new Date().getMinutes();
        let SECONDS = new Date().getSeconds();
        document.getElementById("time").innerHTML = "Uhrzeit: " + HOURS + ":" + MINUTES + ":" + SECONDS;

    }, 50);
}

function getDate() {
    setInterval(() => {
        let DAY = new Date().getUTCDate();
        let MONTH = new Date().getUTCMonth() + 1;
        let YEAR = new Date().getUTCFullYear();
        document.getElementById("actual_date").innerHTML = "Datum: " + DAY + "." + MONTH + "." + YEAR;
    }, 50);
}

function getOption() {
    for (let i = 1; i < 31; i++) {
        document.getElementById("SelectDay").innerHTML += `
        <option value="${i}">.${i}</option>`
    }

}






window.onload = function () {
    getTime();
    getCalenderData();
    getDate();
    getOption();

}