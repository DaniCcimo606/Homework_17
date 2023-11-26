// Все переменные нужны. Лишних нет. Удалить что-то я так же не могу
let enterFirstName;
let enterLastName;
let userName;
let enterMail;
let userEmail;
let enterDate;
let userDate;
let questionnaireList = document.createElement('ul');
questionnaireList.classList.add('questionnaireList');
document.body.appendChild(questionnaireList);

do {
    enterFirstName = prompt('Enter your name').trim();

    if (/[^\w\s]/.test(enterFirstName) === true && enterFirstName.indexOf(' ') === -1 || enterFirstName.indexOf('0') !== -1 || enterFirstName.indexOf('1') !== -1 || enterFirstName.indexOf('2') !== -1 || enterFirstName.indexOf('3') !== -1 || enterFirstName.indexOf('4') !== -1 || enterFirstName.indexOf('5') !== -1 || enterFirstName.indexOf('6') !== -1 || enterFirstName.indexOf('7') !== -1 || enterFirstName.indexOf('8') !== -1 || enterFirstName.indexOf('9') !== -1) {
        alert('Extra symbol!!!');
    } else if (enterFirstName == '') {
        alert('Empty line!');
    } else if (enterFirstName.indexOf(' ') !== -1 || enterFirstName.indexOf(' ') === -1) {
        break;
    } else {
        alert('Error 404');
    }
} while (true);

do {
    enterLastName = prompt('Enter your last name').trim();
    
    if (/[^\w\s]/.test(enterLastName) === true && enterLastName.indexOf(' ') === -1 || enterLastName.indexOf('0') !== -1 || enterLastName.indexOf('1') !== -1 || enterLastName.indexOf('2') !== -1 || enterLastName.indexOf('3') !== -1 || enterLastName.indexOf('4') !== -1 || enterLastName.indexOf('5') !== -1 || enterLastName.indexOf('6') !== -1 || enterLastName.indexOf('7') !== -1 || enterLastName.indexOf('8') !== -1 || enterLastName.indexOf('9') !== -1) {
        alert('Extra symbol!!!'); // не жалуйся, плиз. Хз как ещё на цифры проверить(
    } else if (enterLastName == '') {
        alert('Empty line!');
    } else if (enterLastName.indexOf(' ') !== -1 || enterLastName.indexOf(' ') === -1) {
        userName = document.createElement('li');
        userName.classList.add('name');
        userName.textContent = 'full name: ' + enterFirstName + ' ' + enterLastName;
        break;
    } else { // Я специально не вставил в "else" "else if" для вывода полного имени. Если вылезит ошибка или выполнится каким-то немыслимым образом "else", в котором написано "Ошибка", это можно будет в будущем исправить.
        alert('Error 404');
    }
} while (true);

do {
    enterMail = prompt('Enter your email').trim().toLowerCase(); // Тут я хз как чё. Задание очень плохо выражено. Прошу официально не перекидывать меня на вторую перездачу. Просто напиши в телеге и я переделаю. Уверен, такой фигни, как с кавычками, точно не будет xD.
    
    userEmail = document.createElement('li');
    userEmail.classList.add('email');

    if (enterMail.indexOf(' ') !== -1) {
        userEmail.textContent = 'Email: not valid email ' + '"' + enterMail + '"' + ' (There should be no spaces)';
        break;
    } else if (enterMail.indexOf('@') == [0]) {
        userEmail.textContent = 'Email: not valid email ' + '"' + enterMail + '"' + ' (symbol @ find in first place)';
        break;
    } else if (enterMail.indexOf('@') == [enterMail.length] - 1) {
        userEmail.textContent = 'Email: not valid email ' + '"' + enterMail + '"' + ' (symbol @ find in last place)';
        break;
    } else if (enterMail.indexOf('@') === -1) {
        userEmail.textContent = 'Email: not valid email ' + '"' + enterMail + '"' + ' (symbol @ not exist)';
        break;
    } else if (enterMail.indexOf(' ') === -1 && enterMail.indexOf('@') !== -1) {
        userEmail.textContent = 'Email: ' + enterMail;
        break;
    } else {
        alert('Error 404');
    }
} while (true);

do {
    enterDate = prompt('Enter your date of birth').trim();
    
    if (enterDate >= new Date().getFullYear()) {
        alert('The year of birth cannot be greater than the current year!!!');
    } else if (isNaN(enterDate)) {
        alert('Numbers only!!!');
    } else if (enterDate.indexOf(' ') !== -1) {
        alert('There should be no spaces!');
    } else if (!isNaN(enterDate) && enterDate.indexOf(' ') === -1 && enterDate < new Date().getFullYear()) {
        enterDate = new Date().getFullYear() - new Date(enterDate).getFullYear();
        userDate = document.createElement('li');
        userDate.classList.add('date');
        userDate.textContent = 'Age: ' + enterDate;
        break;
    } else {
        alert('Error 404');
    }
} while (true);

questionnaireList.appendChild(userName);
questionnaireList.appendChild(userEmail);
questionnaireList.appendChild(userDate);



// Всё, что я брал с инета, внизу \\

// /[^\w\s]/.test(a)