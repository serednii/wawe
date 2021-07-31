$(function () {

   $('.blog__list').slick({
      arrows: false,
      dots: true
   });

   var mixer = mixitup('.mix__images');
   function myFunction(x) {

      //if (x.matches) { // відключаэмо класи при більшому екрані
         $('.menu-button').find('.menu-icon').removeClass('menu-icon--active');
         $('.menu').removeClass('menu--active');
         // id__menu.style.height ="auto";
   }


   $(".menu a, .go-top, .logo").on("click", function (event) {
              //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
              //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
              //узнаем высоту от начала страницы до блока на который ссылается якорь
                  top = ($(id).offset().top)-60;
              //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
         });


         $(window).scroll(function() {
            colorHeader();
            // Действие, если выполнен скролл
         });

   function updateMenuButton() {
      $('.menu-button').find('.menu-icon').toggleClass('menu-icon--active');
      $('.menu').toggleClass('menu--active');
      setEqualHeight();
   }

      $('.menu-button').click(function (e) {
         e.preventDefault();
         updateMenuButton();
      });

   $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("#id__menu"); // тут указываем ID элемента
      var div1 = $("#id__btn"); // тут указываем ID элемента
      var div3 = $(".menu__link"); // тут указываем class элементов

      if (!div.is(e.target) && !div1.is(e.target)  // если клик был не по нашему блоку
      && div.has(e.target).length === 0  && div1.has(e.target).length === 0) { // и не по его дочерним элементам
      myFunction();
      }

      if (div3.is(e.target) ) { // при переході по ссилці ховаємо меню 
      myFunction();
      }
   });

   var x = window.matchMedia("(min-width: 1024px)")
   // myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

   $(window).resize(setEqualHeight);//Виконується при зміні розмірів вікна браузера 

   function setEqualHeight() {
      const elementHight = document.querySelector('.menu__link').offsetHeight; //висота елемента списка
      var spis = document.querySelector('.menu__list').children.length //кількість елементів в списку 
      const x = document.documentElement.clientWidth; //ширина вікна браузера
      const y = document.documentElement.clientHeight; //висота вікна браузера

      if(x<=1024){
         colorHeader();
       }else{
          colorHeader();
       }

      console.log(x);
         var temp = (y - elementHight*2)+20;// висота меню = висоті вікна - 2 елементи
         //якщо список меню більший за висоту вікна браузера і ширина вікна браузера менша за 1024
         if (y < (spis * elementHight+elementHight) && x < 1024) {
           
            id__menu.style.height = temp + "px"; // встановити висоту списка рівній висоті вікна бруузера мінус один елемент

            // $('.menu__list').addClass('menu__list--scroll');
         } else {
            // $('.menu__list').removeClass('menu__list--scroll');
            // id__menu.style.height = "auto"; 
         }
   }

   window.onload = function () {//Виконується при завантажені сторінки 
      setEqualHeight();
   };

});

function  colorHeader(){
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

       if(scrollTop>200 && scrollTop<1000){
          var collor = ((scrollTop-200)/800)*0.4;
          console.log( collor );
          document.querySelector('.wrapper-menu').style.backgroundColor='rgba(87, 133, 155, '+collor+')';
          document.querySelector('.header__logo').style.backgroundColor='rgba(87, 133, 155,'+collor+')';
       }else{
         document.querySelector('.wrapper-menu').style.backgroundColor='transparent';
         document.querySelector('.header__logo').style.backgroundColor='transparent';
       }
        if(scrollTop>990){
         document.querySelector('.wrapper-menu').style.backgroundColor='rgb(87, 133, 155,0.4)';
         document.querySelector('.header__logo').style.backgroundColor='rgb(87, 133, 155,0.4)';
       }
         
       if(document.documentElement.clientWidth<1024){
         document.querySelector('.wrapper-menu').style.backgroundColor='transparent';
       }
}