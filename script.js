
let year;

function acceptTime() {
    let date = document.getElementById('workday-date').value;
    let startTime = document.getElementById('start-time').value;
    let endTime = document.getElementById('end-time').value;
    for (let i = 6; i < 10; i++) {
        year += date[i];
    }
    console.log(year);
    let start = new Date (2024, );

}