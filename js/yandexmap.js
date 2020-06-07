// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
var myMap,
  myPlacemark1,
  myPlacemark2,
  myPlacemark3,
  myPlacemark4,
  myPlacemark5,
  myPlacemark6,
  myPlacemark7,
  myPlacemark8,
  myPlacemark9,
  myPlacemark10,
  myPlacemark11,
  myPlacemark12,
  myPlacemark13,
  myPlacemark14,
  myPlacemark15,
  myPlacemark16,
  myPlacemark17,
  myPlacemark18,
  myPlacemark19,
  myPlacemark20,
  myPlacemark21,
  myPlacemark22,
  myPlacemark23,
  myPlacemark24,
  myPlacemark25,
  myPlacemark26,
  myPlacemark27,
  myPlacemark28,
  myPlacemark29,
  myPlacemark30,
  myPlacemark31,
  myPlacemark32,
  myPlacemark33,
  myPlacemark34,
  myPlacemark35,
  myPlacemark36,
  myPlacemark37,
  myPlacemark38,
  myPlacemark39,
  myPlacemark40,
  myPlacemark41,
  myPlacemark42,
  myPlacemark43;

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
    balloonContentBody: '<img src="img/cat1.jpg" >',
  });
  myPlacemark2 = new ymaps.Placemark([59.9473088, 30.7268385], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat2.jpg" >',
  });
  myPlacemark3 = new ymaps.Placemark([59.939864, 30.314566], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat3.jpg" >',
  });
  myPlacemark4 = new ymaps.Placemark([59.939864, 30.514566], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat4.jpg" >',
  });
  myPlacemark5 = new ymaps.Placemark([62.709367, 40.285209], {
    balloonContentHeader: "Стоимость доставки-450р",
    balloonContentBody: '<img src="img/cat5.jpg" >',
  });
  myPlacemark6 = new ymaps.Placemark([55.755814, 37.617635], {
    balloonContentHeader: "Стоимость доставки-400р",
    balloonContentBody: '<img src="img/cat6.jpg" >',
  });
  myPlacemark7 = new ymaps.Placemark([59.755814, 30.617635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat7.jpg" >',
  });
  myPlacemark8 = new ymaps.Placemark([59.755814, 30.667635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat8.jpg" >',
  });
  myPlacemark9 = new ymaps.Placemark([59.755814, 30.667635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat9.jpg" >',
  });
  myPlacemark10 = new ymaps.Placemark([59.755814, 30.689635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat10.jpg" >',
  });
  myPlacemark11 = new ymaps.Placemark([55.755814, 37.167635], {
    balloonContentHeader: "Стоимость доставки-550р",
    balloonContentBody: '<img src="img/cat11.jpg" >',
  });
  myPlacemark12 = new ymaps.Placemark([55.755814, 37.467635], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/cat12.jpg" >',
  });
  myPlacemark13 = new ymaps.Placemark([59.755814, 30.660695], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat13.jpg" >',
  });
  myPlacemark14 = new ymaps.Placemark([59.755814, 30.661635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat14.jpg" >',
  });
  myPlacemark15 = new ymaps.Placemark([59.755814, 30.662635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat15.jpg" >',
  });
  myPlacemark16 = new ymaps.Placemark([59.755814, 30.663635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/cat16.jpg" >',
  });
  myPlacemark17 = new ymaps.Placemark([59.755814, 30.664635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog1.jpg" >',
  });
  myPlacemark18 = new ymaps.Placemark([43.585525, 39.723062], {
    balloonContentHeader: "Стоимость доставки-560р",
    balloonContentBody: '<img src="img/dog2.jpg" >',
  });
  myPlacemark19 = new ymaps.Placemark([59.755814, 30.665635], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog3.jpg" >',
  });
  myPlacemark20 = new ymaps.Placemark([55.773444, 37.655329], {
    balloonContentHeader: "Стоимость доставки-630р",
    balloonContentBody: '<img src="img/dog4.jpg" >',
  });
  myPlacemark21 = new ymaps.Placemark([55.776451, 37.655212], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/dog5.jpg" >',
  });
  myPlacemark22 = new ymaps.Placemark([59.937585, 30.360398], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog6.jpg" >',
  });
  myPlacemark23 = new ymaps.Placemark([55.754375, 37.633587], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/dog7.jpg" >',
  });
  myPlacemark24 = new ymaps.Placemark([55.753689, 37.642117], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/dog8.jpg" >',
  });
  myPlacemark25 = new ymaps.Placemark([55.745073, 37.603488], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/dog9.jpg" >',
  });
  myPlacemark26 = new ymaps.Placemark([55.776867, 37.59268], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog10.jpg" >',
  });
  myPlacemark27 = new ymaps.Placemark([55.674158, 37.858356], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/dog11.jpg" >',
  });
  myPlacemark28 = new ymaps.Placemark([59.928876, 30.412689], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog12.jpg" >',
  });
  myPlacemark29 = new ymaps.Placemark([48.136207, 67.15355], {
    balloonContentHeader: "Стоимость доставки-700р",
    balloonContentBody: '<img src="img/dog13.jpg" >',
  });
  myPlacemark30 = new ymaps.Placemark([61.6677, 40.202466], {
    balloonContentHeader: "Стоимость доставки-450р",
    balloonContentBody: '<img src="img/dog14.jpg" >',
  });
  myPlacemark31 = new ymaps.Placemark([60.051284, 30.438578], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog15.jpg" >',
  });
  myPlacemark32 = new ymaps.Placemark([59.966394, 30.311502], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog16.jpg" >',
  });
  myPlacemark33 = new ymaps.Placemark([59.966394, 30.331502], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog17.jpg" >',
  });
  myPlacemark34 = new ymaps.Placemark([55.582528, 37.671153], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog18.jpg" >',
  });
  myPlacemark35 = new ymaps.Placemark([59.984916, 30.344052], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/other1.jpg" >',
  });
  myPlacemark36 = new ymaps.Placemark([59.911935, 30.454685], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/other2.jpg" >',
  });
  myPlacemark37 = new ymaps.Placemark([63.621324, 33.232608], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/other3.jpg" >',
  });
  myPlacemark38 = new ymaps.Placemark([61.656737, 40.192395], {
    balloonContentHeader: "Стоимость доставки-500р",
    balloonContentBody: '<img src="img/other4.jpg" >',
  });
  myPlacemark39 = new ymaps.Placemark([54.314192, 48.403123], {
    balloonContentHeader: "Стоимость доставки-676р",
    balloonContentBody: '<img src="img/dog19.jpg" >',
  });
  myPlacemark40 = new ymaps.Placemark([53.024259, 158.643503], {
    balloonContentHeader: "Стоимость доставки-650р",
    balloonContentBody: '<img src="img/cat17.jpg" >',
  });
  myPlacemark41 = new ymaps.Placemark([53.024259, 158.643503], {
    balloonContentHeader: "Стоимость доставки-бесплатно",
    balloonContentBody: '<img src="img/dog20.jpg" >',
  });
  myPlacemark42 = new ymaps.Placemark([55.845370, 37.363870], {
    balloonContentHeader: "Стоимость доставки-469р",
    balloonContentBody: '<img src="img/dog21.jpg" >',
  });
  myPlacemark43 = new ymaps.Placemark([59.927423, 30.348297], {
    balloonContentHeader: "Стоимость доставки-бесплатная",
    balloonContentBody: '<img src="img/dog21.jpg" >',
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
    .add(myPlacemark38)
    .add(myPlacemark39)
    .add(myPlacemark40)
    .add(myPlacemark41)
    .add(myPlacemark42)
    .add(myPlacemark43);
  myMap.geoObjects.add(myPin);
}