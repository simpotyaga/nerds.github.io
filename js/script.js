var open = document.querySelector(".open-form");              // нашел "напиши нам"
var form = document.querySelector(".hidden-form");     // "нашел окно формы"
var close = document.querySelector(".cross-form");      // "нашел крестик(закрытия) формы"

open.addEventListener("click", function (evt) {           //  нажатие на "напиши нам"
  evt.preventDefault();                                     // снял дефолт
  form.classList.add("show-form");                        // добавил класс окно, для ПОКАЗА
});


close.addEventListener("click", function (evt) {       // нажатие на крестик "для закрытие окна"
  evt.preventDefault();                                  //  снял дефолт
  form.classList.remove("show-form");                  //снял класс окна, для ПОКАЗА
});


window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
  if (evt.keyCode === 27) {                              //  "Esc"
    if (form.classList.contains("show-form")) {             // убеждаемся что окно открыто
      form.classList.remove("show-form");                    //тогда при нажатие Esc, удалиться класс     
    }
  }
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
  });
});