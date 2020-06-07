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
  var mySwiper = new Swiper(".swiper-container", {

    cssMode: true,
    mousewheel: true,
    onlyExternal: true,
    updateOnWindowResize: true,
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
          modal.removeClass("modal--visible");
          $(".modal").fadeOut();
          $(".modalSend").fadeIn();
        },
      });
    },
  });

  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:",
  });

  //закрытие аккардиона
  $(".accordion-label").on("click", function (event) {
    $this = $(event.target);
    $('.active2').removeClass("hide");
    $this.next('.accordion-child').addClass("active2");
  });

});

//анимация 
new WOW().init();

//увеличение фото
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  albumLabel: "Изображение %1 из %2",
  fadeDuration: 1000,
  fitImagesInViewport: true,
});

//бургер меню
//открытие и закртиые бургер меню
$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .nav").toggleClass("active");
  });
  $(".nav").click(function (event) {
    $(".burger, .nav").removeClass("active");
  });

  $(".burger-our").click(function (event) {
    $(".burger-our, .nav-our").toggleClass("active-our");
  });
  $(".nav-our").click(function (event) {
    $(".burger-our, .nav-our").removeClass("active-our");
  });
});

//переход по ссылке
function toorder() {
  location.href = '#7';
};

var wow = new WOW({
  mobile: false
});
new wow.init();

//data-src
[].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function () {
    img.removeAttribute("data-src");
  };
});