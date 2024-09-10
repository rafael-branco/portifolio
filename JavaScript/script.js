

let myAge = document.querySelector("#my-age");

myAge.innerHTML = currentAge();

function currentAge() {
    let myBirthday = new Date("1998-06-23");
    let currentDate = new Date();

    let years = currentDate.getFullYear() - myBirthday.getFullYear();

    if (
        currentDate.getMonth() < myBirthday.getMonth() ||
        (currentDate.getMonth() === myBirthday.getMonth() && currentDate.getDate() < myBirthday.getDate())
    ) {
        years--;
    }

    return years;
}
