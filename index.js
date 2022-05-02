const modal = new Modal('modalButton', '#modal');

// form validation
// Определяем функции для отображения сообщения об ошибке
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validation() {
  const FORM_FEEDBACK = document.querySelector('#form__feedback');
  const FIELD_NAME = FORM_FEEDBACK.name.value;
  const FIELD_EMAIL = FORM_FEEDBACK.email.value;
  const FIELD_MESSAGE = FORM_FEEDBACK.message.value;

  // Определяем переменные ошибок со значением по умолчанию
  var nameErr = (emailErr = messageErr = true);

  // Проверяем имя
  if (FIELD_NAME == '') {
    printError('nameErr', 'Пожалуйста, введите ваше имя');
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(FIELD_NAME) === false) {
      printError('nameErr', 'Пожалуйста, введите правильное имя');
    } else {
      printError('nameErr', '');
      nameErr = false;
    }
  }

  // Проверяем адрес электронной почты
  if (FIELD_EMAIL == '') {
    printError('emailErr', 'Пожалуйста, введите адрес вашей электронной почты');
  } else {
    // Регулярное выражение для базовой проверки электронной почты
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(FIELD_EMAIL) === false) {
      printError('emailErr', 'Пожалуйста, введите действительный адрес электронной почты');
    } else {
      printError('emailErr', '');
      emailErr = false;
    }
  }
  // Проверяем адрес электронной почты
  if (FIELD_MESSAGE == '') {
    printError('messageErr', 'Пожалуйста, введите адрес вашей электронной почты');
  } else {
    printError('messageErr', '');
    nameErr = false;
  }
  if ((nameErr || emailErr || messageErr) == true) {
    return false;
  } else {
    let dataPreview = {
      name: FIELD_NAME,
      email: FIELD_EMAIL,
      massage: FIELD_MESSAGE,
    };
    alert(dataPreview);
  }
}

// отправка формы

FORM_FEEDBACK.onsubmit = onSubmitForm;

function onSubmitForm() {
  console.log('submit');
}
