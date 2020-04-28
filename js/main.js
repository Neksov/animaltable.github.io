$(document).ready(function () {
  let modal = $(".modal"); //помещаем модальное окно
  modalBtn = $("[data-toggle = modal]"); //

  closeBtn = $(".modal__close"); //
  closeBtnSend = $(".modalSend__close"); //

  modalBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modal").removeClass("modal--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".modal")) {
      modal.toggleClass("modal--visible");
    }
  });

  //открытие модального окна ПОДПИСКИ
  $(".modalSend-btn").on("click", function (event) {
    event.preventDefault();
    $(".modalSend").fadeIn();
  });
  //закрытие по esc окна ПОДПИСКИ
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modalSend").fadeOut();
    }
  });
  // закрытие по клику вне окна  ПОДПИСКИ
  $(document).on("click", function (e) {
    $(".modalSend").fadeOut();
  });

  //Слайдер
  var swiper = new Swiper(".swiper-container", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    cssMode: true,
    mousewheel: true,
    keyboard: f,
  });

  //валидация форм
  $(".toorder__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      userMessage: {
        required: true,
        minlength: 10,
        maxlength: 50,
      },
      // правило- обьект
      userEmail: {
        required: true,
        email: true,
      },
      userPhone: {
        required: !0,
        minlength: 16,
      },
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов",
      },

      userPhone: {
        required: "Телефон обязателен",
        minlength: "Некорректно введен номер",
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: ivanov@gmail.com",
      },
      userMessage: {
        required: "Сообщение обязателено",
        minlength: "Сообщение не короче 10 символов",
        maxlength: "Сообщение не длиньше 30 символов",
      },
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendToorder.php",
        data: $(".toorder__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          //modal.on('.modalSend');
          $(form)[0].reset(); // чистит поля после отправки формы
          modal.removeClass("modal--visible");
          $(".modal").fadeOut();
          $(".modalSend").fadeIn();
        },
      });
    },
  });

  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      userPhone: {
        required: !0,
        minlength: 16,
      },
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов",
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Некорректно введен номер",
      },
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendModal.php",
        data: $(".modal__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          $(".modalSend").fadeIn();
        },
      });
    },
  });

  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:",
  });
  new WOW().init();

  //data-src
  [].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function () {
      img.removeAttribute("data-src");
    };
  });
});
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
var myMap, myPlacemark1, myPlacemark2, myPlacemark3, myPlacemark4, myPlacemark5, myPlacemark6, myPlacemark7, myPlacemark8, myPlacemark9, myPlacemark10, myPlacemark11, myPlacemark12, myPlacemark13, myPlacemark14, myPlacemark15, myPlacemark16, myPlacemark17, myPlacemark18, myPlacemark19, myPlacemark20, myPlacemark21, myPlacemark22, myPlacemark23, myPlacemark24, myPlacemark25, myPlacemark26, myPlacemark27, myPlacemark28, myPlacemark29, myPlacemark30, myPlacemark31, myPlacemark32, myPlacemark33, myPlacemark34, myPlacemark35, myPlacemark36, myPlacemark37, myPlacemark38;

function init() {
  // Создание карты.
  myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [56.1097732, 40.36349],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 6,
    controls: ["smallMapDefaultSet"],
  });
  myPin = new ymaps.GeoObjectCollection({}, {
    preset: "islands#redIcon", //все метки красные
    draggable: false, // и их можно перемещать
  });

  myMap.behaviors.disable(["scrollZoom"]);

  myPlacemark1 = new ymaps.Placemark([59.49864, 30.314566], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat1.png" >',
  });
  myPlacemark2 = new ymaps.Placemark([59.9473088, 30.7268385], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat2.png" >',
  });
  myPlacemark3 = new ymaps.Placemark([59.939864, 30.314566], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat3.png" >',
  });
  myPlacemark4 = new ymaps.Placemark([59.939864, 30.514566], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat4.png" >',
  });
  myPlacemark5 = new ymaps.Placemark([62.709367, 40.285209], {
    balloonContentHeader: "Стоимость доставки-450р",
    balloonContentBody: '<img src="../../../img/cat5.png" >',
  });
  myPlacemark6 = new ymaps.Placemark([55.755814, 37.617635], {
    balloonContentHeader: "Стоимость доставки-400р",
    balloonContentBody: '<img src="../../../img/cat6.png" >',
  });
  myPlacemark7 = new ymaps.Placemark([59.755814, 30.617635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat7.png" >',
  });
  myPlacemark8 = new ymaps.Placemark([59.755814, 30.667635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat8.png" >',
  });
  myPlacemark9 = new ymaps.Placemark([59.755814, 30.667635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat9.png" >',
  });
  myPlacemark10 = new ymaps.Placemark([59.755814, 30.689635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat10.png" >',
  });
  myPlacemark11 = new ymaps.Placemark([55.755814, 37.167635], {
    balloonContentHeader: "Стоимость доставки-550р",
    balloonContentBody: '<img src="../../../img/cat11.png" >',
  });
  myPlacemark12 = new ymaps.Placemark([55.755814, 37.467635], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/cat12.png" >',
  });
  myPlacemark13 = new ymaps.Placemark([59.755814, 30.660695], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat13.png" >',
  });
  myPlacemark14 = new ymaps.Placemark([59.755814, 30.661635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat14.png" >',
  });
  myPlacemark15 = new ymaps.Placemark([59.755814, 30.662635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat15.png" >',
  });
  myPlacemark16 = new ymaps.Placemark([59.755814, 30.663635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/cat16.png" >',
  });
  myPlacemark17 = new ymaps.Placemark([59.755814, 30.664635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog1.png" >',
  });
  myPlacemark18 = new ymaps.Placemark([43.585525, 39.723062], {
    balloonContentHeader: "Стоимость доставки-560р",
    balloonContentBody: '<img src="../../../img/dog2.png" >',
  });
  myPlacemark19 = new ymaps.Placemark([59.755814, 30.665635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog3.png" >',
  });
  myPlacemark20 = new ymaps.Placemark([55.773444, 37.655329], {
    balloonContentHeader: "Стоимость доставки-630р",
    balloonContentBody: '<img src="../../../img/dog4.png" >',
  });
  myPlacemark21 = new ymaps.Placemark([55.776451, 37.655212], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/dog5.png" >',
  });
  myPlacemark22 = new ymaps.Placemark([59.937585, 30.360398], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog6.png" >',
  });
  myPlacemark23 = new ymaps.Placemark([55.754375, 37.633587], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/dog7.png" >',
  });
  myPlacemark24 = new ymaps.Placemark([55.753689, 37.642117], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/dog8.png" >',
  });
  myPlacemark25 = new ymaps.Placemark([55.745073, 37.603488], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/dog9.png" >',
  });
  myPlacemark26 = new ymaps.Placemark([55.776867, 37.59268], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog10.png" >',
  });
  myPlacemark27 = new ymaps.Placemark([55.674158, 37.858356], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/dog11.png" >',
  });
  myPlacemark28 = new ymaps.Placemark([59.928876, 30.412689], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog12.png" >',
  });
  myPlacemark29 = new ymaps.Placemark([48.136207, 67.15355], {
    balloonContentHeader: "Стоимость доставки-700р",
    balloonContentBody: '<img src="../../../img/dog13.png" >',
  });
  myPlacemark30 = new ymaps.Placemark([61.6677, 40.202466], {
    balloonContentHeader: "Стоимость доставки-450р",
    balloonContentBody: '<img src="../../../img/dog14.png" >',
  });
  myPlacemark31 = new ymaps.Placemark([60.051284, 30.438578], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog15.png" >',
  });
  myPlacemark32 = new ymaps.Placemark([59.966394, 30.311502], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog16.png" >',
  });
  myPlacemark33 = new ymaps.Placemark([59.966394, 30.331502], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog17.png" >',
  });
  myPlacemark34 = new ymaps.Placemark([55.582528, 37.671153], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/dog18.png" >',
  });
  myPlacemark35 = new ymaps.Placemark([59.984916, 30.344052], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/other1.png" >',
  });
  myPlacemark36 = new ymaps.Placemark([59.911935, 30.454685], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="../../../img/other2.png" >',
  });
  myPlacemark37 = new ymaps.Placemark([63.621324, 33.232608], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/other3.png" >',
  });
  myPlacemark38 = new ymaps.Placemark([61.656737, 40.192395], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="../../../img/other4.png" >',
  });
  myPin
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3)
    .add(myPlacemark4)
    .add(myPlacemark5)
    .add(myPlacemark6)
    .add(myPlacemark7)
    .add(myPlacemark8)
    .add(myPlacemark9)
    .add(myPlacemark10)
    .add(myPlacemark11)
    .add(myPlacemark12)
    .add(myPlacemark13)
    .add(myPlacemark14)
    .add(myPlacemark15)
    .add(myPlacemark16)
    .add(myPlacemark17)
    .add(myPlacemark18)
    .add(myPlacemark19)
    .add(myPlacemark20)
    .add(myPlacemark21)
    .add(myPlacemark22)
    .add(myPlacemark23)
    .add(myPlacemark24)
    .add(myPlacemark25)
    .add(myPlacemark26)
    .add(myPlacemark27)
    .add(myPlacemark28)
    .add(myPlacemark29)
    .add(myPlacemark30)
    .add(myPlacemark31)
    .add(myPlacemark32)
    .add(myPlacemark33)
    .add(myPlacemark34)
    .add(myPlacemark35)
    .add(myPlacemark36)
    .add(myPlacemark37)
    .add(myPlacemark38);
  myMap.geoObjects.add(myPin);
}
//открытие и закртиые бургер меню