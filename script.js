
/**
 * This function load time from the userinput in a variable
 * 
 * @param {string} date - This is the date
 * @param {string} startTime - This is the start time
 * @param {string} endTime - This is the end time
 */

function acceptTime() {
    let date = document.getElementById('workday-date').value;
    let startTime = document.getElementById('start-time').value;
    let startTimeString = `${date}T${startTime}:00`;
    let start = new Date(startTimeString);
    let endTime = document.getElementById('end-time').value;
    let endTimeString = `${date}T${endTime}:00`;
    let end = new Date(endTimeString);

    let workMinute = (end - start) / 1000 / 60;
    let workHour = workMinute / 60;

    calculatePayment(workHour);
}

function calculatePayment(workHour) {
    let sum = workHour * 12.41;
    let totalSum = sum.toFixed(2);
    console.log(totalSum, "€");
}

