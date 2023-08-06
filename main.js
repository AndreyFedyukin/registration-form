//Создаем текстовое поле
function getInput(placeholder, type, className) {
  let input = document.createElement("input")
  input.placeholder = placeholder
  input.type = type
  input.classList.add(className)
  return input
};

// Создаем текстовый блок
let box = document.createElement("div");
box.classList.add("box");

// Создаем заголовок к блоку
let title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Регистрация";

// Создаем текстовые поля имя
let nameInpWrap = document.createElement("div");
nameInpWrap.classList.add("wrap");
let nameInp = getInput("Имя", "text", "text-field");
let nameErrorLabel = document.createElement("label");
nameErrorLabel.classList.add("error");
nameInpWrap.append(nameInp, nameErrorLabel);

// Создаем текстовые поля фамилия
let surnameInpWrap = document.createElement("div");
surnameInpWrap.classList.add("wrap");
let surnameInp = getInput("Фамилия", "text", "text-field");
let surnameErrorLabel = document.createElement("label");
surnameErrorLabel.classList.add("error");
surnameInpWrap.append(surnameInp, surnameErrorLabel);

// Создаем текстовые поля возраст
let ageInpWrap = document.createElement("div");
ageInpWrap.classList.add("wrap");
let ageInp = getInput("Возраст", "number", "text-field");
let ageErrorLabel = document.createElement("label");
ageErrorLabel.classList.add("error");
ageInpWrap.append(ageInp, ageErrorLabel);

// Создаем текстовые поля почта
let emailInpWrap = document.createElement("div");
emailInpWrap.classList.add("wrap");
let emailInp = getInput("E-mail", "email", "text-field");
let emailErrorLabel = document.createElement("label");
emailErrorLabel.classList.add("error");
emailInpWrap.append(emailInp, emailErrorLabel);

// Создаем текстовые поля пароль
let passInpWrap = document.createElement("div");
passInpWrap.classList.add("wrap");
let passInp = getInput("Пароль", "password", "text-field");
let passErrorLabel = document.createElement("label");
passErrorLabel.classList.add("error");
passInpWrap.append(passInp, passErrorLabel);

// Создаем галочку согласие с условиями
let conditionLabelWrap = document.createElement("div");
conditionLabelWrap.classList.add("wrap");
let conditionLabel = document.createElement("label");
conditionLabel.classList.add("condition");
let conditionInp = document.createElement("input");
conditionInp.classList.add("checkbox")
conditionInp.type = "checkbox";
let conditionSpan = document.createElement("span");
conditionSpan.classList.add("span");
conditionSpan.textContent = "Согласны с условиями?";
conditionLabel.append(conditionInp, conditionSpan);
let conditionErrorLabel = document.createElement("label");
conditionErrorLabel.classList.add("error");
conditionLabelWrap.append(conditionLabel, conditionErrorLabel);


// Создаем кнопку
let btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Регистрация";

// Создаем функцию по действию при нажатии на кнопку
btn.onclick = function () {
  // Получаем значения полей
  let nameValue = nameInp.value;
  let surnameValue = surnameInp.value;
  let ageValue = Number(ageInp.value);
  let emailValue = emailInp.value;
  let passValue = passInp.value;
  let conditionValue = conditionInp.checked;

  // Создаем переменную флаг
  let validationResult = false;

  // Проверка имени
  nameErrorLabel.textContent = "";
  if (nameValue.length <= 1) {
    nameErrorLabel.textContent = "Ошибка! Введите правильное имя"
    validationResult = true
  };
  if (nameValue === "") {
    nameErrorLabel.textContent = "Ошибка! Введите имя"
    validationResult = true
  };

  // Проверка фамилии
  surnameErrorLabel.textContent = "";
  if (surnameValue.length <= 1) {
    surnameErrorLabel.textContent = "Ошибка! Введите правильную фамилию"
    validationResult = true
  };
  if (surnameValue === "") {
    surnameErrorLabel.textContent = "Ошибка! Введите фамилию"
    validationResult = true
  };

  // Проверка возраста
  ageErrorLabel.textContent = "";
  if (ageValue < 18) {
    ageErrorLabel.textContent = "Ошибка! Вы несовершеннолетний"
    validationResult = true
  };
  if (ageValue === 0) {
    ageErrorLabel.textContent = "Ошибка! Введите возраст"
    validationResult = true
  };

  // Проверка e-mail
  emailErrorLabel.textContent = "";
  if (emailValue.length <= 3 || emailValue.includes("@") === false) {
    emailErrorLabel.textContent = "Ошибка! Введите правильный e-mail"
    validationResult = true
  };
  if (emailValue === "") {
    emailErrorLabel.textContent = "Ошибка! Введите e-mail"
    validationResult = true
  };

  // Проверка пароля
  passErrorLabel.textContent = "";
  if (passValue.length < 6) {
    passErrorLabel.textContent = "Ошибка! Введите надежный пароль"
    validationResult = true
  };
  if (passValue === "") {
    passErrorLabel.textContent = "Ошибка! Введите пароль"
    validationResult = true
  };

  // Проверка согласия
  conditionErrorLabel.textContent = "";
  if (conditionValue === false) {
    conditionErrorLabel.textContent = "Ошибка! Подтвердите своё согласие"
    validationResult = true
  };

  if (validationResult === true) {
    return
  };

  alert(`Ура! ${nameValue} ${surnameValue}, поздравляем с регистрацией!`);
};

// Создаем регистрационное поле
box.append(
  title,
  nameInpWrap,
  surnameInpWrap,
  ageInpWrap,
  emailInpWrap,
  passInpWrap,
  conditionLabelWrap,
  btn
);

document.body.append(box);