function is_checked() {
    const check1 = document.getElementById('1').checked;
    const check2 = document.getElementById('2').checked;
    const check3 = document.getElementById('3').checked;
    const check4 = document.getElementById('4').checked;
    const check5 = document.getElementById('5').checked;
    if (check1 === false && check2 === false && check3 === false && check4 === false && check5 === false) {
        alert('Пожалуйста, выберите нужные вам варианты');
        return false;
    }
    else {
        return true;
    }

}
function createCheckBox() {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    return checkbox; 
}