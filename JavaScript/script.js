

let myAge = document.querySelector("#my-age");

myAge.innerHTML = currentAge();

function currentAge() {
    let myBirthday = new Date("1998-06-23");
    let currentDate = new Date();

    let differenceDate = currentDate - myBirthday;

    var day = 1000 * 60 * 60 * 24;

    let days = Math.floor(differenceDate / day);
    let months = Math.floor(days / 31);
    let years = Math.floor(months / 12);

    return years;
}