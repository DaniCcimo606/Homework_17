let enterFirstName;
let enterLastName;
let enterMail;
let enterDate;

let questionnaireWrap = document.querySelector(`.questionnaire`)

do {
    enterFirstName = prompt(`Введіть своє повне ім'я:`);

    if (enterFirstName === null) {
        continue
    }

    if (enterFirstName !== null) {
        firstNameLetter = enterFirstName.slice(1);
        firstName = enterFirstName[0].toUpperCase() + firstNameLetter;
        firstName.trim();
    }
} while (enterFirstName === null || enterFirstName.indexOf(` `) !== -1);

do {
    enterLastName = prompt(`Введіть своє прізвище:`);
    
    if (enterLastName === null) {
        continue
    }

    if (enterLastName !== null) {
        firstSurNameLetter = enterLastName.slice(1);
        lastName = enterLastName[0].toUpperCase() + firstSurNameLetter;
        lastName.trim();
    }
} while (enterLastName === null || enterLastName.indexOf(` `) !== -1);

do {
    enterMail = prompt(`Введіть свій email:`)

    if (enterMail === null) {
        continue;
    }

    if (enterMail !== null) {
        enterMail.toLowerCase();
        enterMail.trim();
        if (enterMail.indexOf(`@`) == [0]) {
            alert(`недійсний email "${enterMail}" (символ @ знайти на першому місці)`);
        } else if (enterMail.indexOf(`@`) == [enterMail.length] - 1) {
            alert(`недійсний email "${enterMail}" (символ @ знайти на останньому місці)`);
        } else if (enterMail.indexOf(`@`) == -1) {
            alert(`недійсний email "${enterMail}" (відсутній символ "@")`);
        } else if (enterMail.indexOf(` `) !== -1) {
            alert(`недійсний email "${enterMail}" (в email не повинні бути прогалини)`);
        }
    }

} while (enterMail === null || enterMail.indexOf(`@`) == [0] || enterMail.indexOf(`@`) == [enterMail.length] - 1 || enterMail.indexOf(`@`) == -1 || enterMail.indexOf(` `) !== -1);

do {
    enterDate = prompt(`Введіть дату народження:`)
    enterDate = enterDate.trim();
} while (enterDate === null || enterDate.indexOf(` `) !== -1);

let birthDate  = new Date(enterDate);
let currentDate  = new Date();
let age = currentDate.getFullYear() - birthDate.getFullYear()

// console.log(`${firstName} ${lastName}`);
// console.log(enterMail);
// console.log(age);

let username = `<p id="name">Ім'я користувача: ${firstName} ${lastName}</p>`;
let mail = `<p id="mail">Email користувача: ${enterMail}</p>`;
let userAge = `<p id="age">Вік користувача: ${age}</p>`;

// questionnaireWrap.innerHTML = username;
// questionnaireWrap.innerHTML = mail;
// questionnaireWrap.innerHTML = age;

questionnaireWrap.innerHTML = username + mail + userAge;