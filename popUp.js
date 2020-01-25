const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

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

function formValidation() {
    const uLastName = document.registration.lastName.value;
    const uName = document.registration.name.value;
    const uOtchestvo = document.registration.otchestvo.value;
    const uAdd = document.registration.address.value;
    const uPassid = document.registration.passid;
    const uEmail = document.registration.email.value;

    if (uLastName && uName && uOtchestvo && uAdd && uPassid.value && uEmail) {
        if (uPassid_validation(uPassid, 6, 30)) {
            return validate('form_id', 'email');
        }
    };
};

return false;
};
function uPassid_validation(uPassid, mx, my) {
    var uPassid_len = uPassid.value.length;
    if (uPassid_len == 0 || uPassid_len >= my || uPassid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        uPassid.focus();
        return false;
    }
    return true;
}
function validate(form_id, email) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const address = uEmail;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    };
};