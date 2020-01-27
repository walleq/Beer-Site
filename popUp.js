const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const closeBut = document.getElementById('closebut');
const passwordId = document.getElementById('passwordId');
const spanPasswordId = createSpan1();
const spanLastname = createSpan1();
const lastName = document.getElementById('lastName');
const spanName = createSpan1();
const name = document.getElementById('name');
const spanOtchestvo = createSpan1();
const otchestvo = document.getElementById('otchestvo');
const spanAddress = createSpan1();
const address = document.getElementById('address');
const spanEmail = createSpan1();
const email = document.getElementById('email');

function createSpan1() {
    return document.createElement('span');
};


function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



function valid(form) {
    const uLastName = document.registration.lastName.value;
    const uName = document.registration.name.value;
    const uOtchestvo = document.registration.otchestvo.value;
    const uAdd = document.registration.address.value;
    const uPassid = document.registration.passid;
    const uEmail = document.registration.email.value;
    let fail = false;

    if (uLastName === '' || uLastName === ' ') {
        lastName_validation(lastName, spanLastname, 'Введите вашу фамилию');
    } if (uName === "" || uName === ' ') {
        lastName_validation(name, spanName, 'Введите ваше имя');
    }
    if (uOtchestvo === "" || uOtchestvo === ' ') {
        lastName_validation(otchestvo, spanOtchestvo, 'Введите ваше отчество');
    }
    if (uAdd === "" || uAdd === ' ') {
        lastName_validation(address, spanAddress, 'Введите вашу дату рождения');
    }
    if (!uPassid_validation(uPassid, 6, 30)) {
        lastName_validation(passwordId, spanPasswordId, 'Пароль должен содержать от 6 до 30 символов');
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(uEmail)) {
        lastName_validation(email, spanEmail, 'Вы неправильно ввели ваш email');
    }
    return false;
};

function uPassid_validation(uPassid, mx, my) {
    var uPassid_len = uPassid.value.length;
    if (uPassid_len == 0 || uPassid_len >= my || uPassid_len < mx) {
        uPassid.focus();
        return false;
    }
    return true;
};
function lastName_validation(document, span, text) {
    span.innerText = text; /* с- текст, б - спанластнейм, а - документ бай ид */
    span.style.color = 'red';
    document.parentNode.insertBefore(span, document.nextSibling);
};
closeBut.addEventListener('click', toggleModal);