const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const passwordId = document.getElementById('passwordId');
const span = document.createElement('span');

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
    
    if (uLastName === "" || uLastName === '') {
        fail = 'Вы не ввели свою фамилию';
    } else if (uName === "" || uName === '') {
        fail = 'Вы не ввели свое имя';
    }
    else if (uOtchestvo === "" || uOtchestvo === '') {
        fail = 'Вы не ввели свое отчество';
    }
    else if (uAdd === "" || uAdd === '') {
        fail = 'Вы не ввели свою дату рождения';
    }
    else if (/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(uEmail) === false) {
        fail = 'Вы не правильно ввели email';
    }
    if (fail) {
        alert(fail);
    }
    else if (uLastName && uName && uOtchestvo && uAdd && uPassid.value && uEmail) {
        if (uPassid_validation(uPassid, 6, 30)) {
            return validate();
        };
    };

    return false;
};

function uPassid_validation(uPassid, mx, my) {
    var uPassid_len = uPassid.value.length;
    if (uPassid_len == 0 || uPassid_len >= my || uPassid_len < mx) {

        span.innerText = 'Пароль должен быть от 6 до 30 символов.';
        span.style.color = 'red';
        passwordId.parentNode.insertBefore(span, passwordId.nextSibling);
        uPassid.focus();
        return false;
    }
    return true;
}
function validate() {
    const reg = /^.+@.+\..+$/;
    const address = uEmail;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    };
};