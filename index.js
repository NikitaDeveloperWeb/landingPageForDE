const modal = new Modal('modalButton', '#modal');

// form validation
// Определяем функции для отображения сообщения об ошибке
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
let FORM_FEEDBACK = document.querySelector('#form__feedback');
let FIELD_NAME = document.getElementById('name');
let FIELD_EMAIL = document.getElementById('email');
let FIELD_MESSAGE = document.getElementById('message');
let btn = document.getElementById('btn');

function validation() {
  // Определяем переменные ошибок со значением по умолчанию
  let nameErr = (emailErr = messageErr = true);
  let name = FIELD_NAME.value;
  let email = FIELD_EMAIL.value;
  let message = FIELD_MESSAGE.value;
  // Проверяем имя
  if (name == '') {
    printError('nameErr', 'Пожалуйста, введите ваше имя');
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError('nameErr', 'Пожалуйста, введите правильное имя');
    } else {
      printError('nameErr', '');
      nameErr = false;
    }
  }

  // Проверяем адрес электронной почты
  if (email == '') {
    printError('emailErr', 'Пожалуйста, введите адрес вашей электронной почты');
  } else {
    // Регулярное выражение для базовой проверки электронной почты
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError('emailErr', 'Пожалуйста, введите действительный адрес электронной почты');
    } else {
      printError('emailErr', '');
      emailErr = false;
    }
  }
  // Проверяем адрес электронной почты
  if (message == '') {
    printError('messageErr', 'Пожалуйста, введите ваше сообщение');
  } else {
    printError('messageErr', '');
    messageErr = false;
  }
  if ((nameErr || emailErr || messageErr) == true) {
    console.log(data);
    return false;
  } else {
    console.log(data);
    return true;
  }
}

// отправка формы

function onSubmitForm() {
  if (validation()) {
    FORM_FEEDBACK.submit();
  }
}

btn.addEventListener('click', onSubmitForm);
