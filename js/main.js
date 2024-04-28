$(function () {

   //Slider
   $('.blog__list').slick({
      arrows: false,
      dots: true
   });

   //Filter images
   const mixer = mixitup('.mix__images');

   //Анімація при прокручуванні сторінки
   $(".menu a, .go-top, .logo, .content__icon").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = ($(id).offset().top);
      //аніміруємо перехід на відстань - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   $(window).scroll(function () {
      colorHeader();
      // Действие, если выполнен скролл
   });

   // function updateMenuButton() {
   //    $('.menu-button').find('.menu-icon').toggleClass('menu-icon--active');
   //    $('.menu').toggleClass('menu--active');
   //    setEqualHeight();
   // }

   // $('.menu__btn').click(function (e) {
   //    e.preventDefault();
   //    console.log(e)
   //    $('.menu').toggleClass('menu--active');
   //    $('.menu__btn').toggleClass('menu-icon--active')
   // });

   // const menuBtn = document.querySelector('.menu__btn')
   // const menu = document.querySelector('.menu')
   // menuBtn?.addEventListener('click', (e)=>{
   //    console.log(e)

   //    e.preventDefault();
   //    e.currentTarget.classList.toggle('menu-icon--active');
   //    menu?.classList.toggle('menu--active');
   // })

   // $(document).mouseup(function (e) { // події клику по веб-документу
   //    const div = $("#id__menu"); // тут вказуємо ID элемента
   //    const div1 = $(".id__btn"); // тут вказуємо ID элемента
   //    const div3 = $(".menu__link"); // тут вказуємо class элементов

   //    if (!div.is(e.target) && !div1.is(e.target)  // якщо клік був не по нашому блоку
   //       && div.has(e.target).length === 0 && div1.has(e.target).length === 0) { // и не по его дочірнім элементам
   //       hiddenMenu();
   //    }
   //    // при переході по ссилці ховаємо меню 
   //    div3.is(e.target) && hiddenMenu();
   // });

   //Ховаємо меню при кліку на ссилку
   function hiddenMenu() {
      $('.menu-button').find('.menu-icon').removeClass('menu-icon--active');
      $('.menu').removeClass('menu--active');
   }

});



// $(function () {//Виконується при завантажені сторінки 

//    $('.blog__list').slick({
//       arrows: false,
//       dots: true
//    });

//    mixitup('.mix__images');


//    $(".menu a, .go-top, .logo").on("click", function (event) {
//       //отменяем стандартную обработку нажатия по ссылке
//       event.preventDefault();
//       //забираем идентификатор бока с атрибута href
//       var id = $(this).attr('href'),
//          //узнаем высоту от начала страницы до блока на который ссылается якорь
//          top = ($(id).offset().top) - 60;
//       //анимируем переход на расстояние - top за 1500 мс
//       $('body,html').animate({ scrollTop: top }, 1500);
//    });



//    $('.menu-button').click(function (e) {
//       e.preventDefault();
//       updateMenuButton();
//    });

//    setEqualHeight();

// });

// function updateMenuButton() {
//    $('.menu-button').find('.menu-icon').toggleClass('menu-icon--active');
//    $('.menu').toggleClass('menu--active');
//    setEqualHeight();
// }

// $(document).mouseup(function (e) { // событие клика по веб-документу
//    const menu = $("#id__menu"); // тут указываем ID элемента
//    const menuLink = $(".menu__link"); // тут указываем class элементов

//    if (!menu.is(e.target) && !menuLink.is(e.target)  // если клик был не по нашему блоку
//       && menu.has(e.target).length === 0 && menuLink.has(e.target).length === 0) { // и не по его дочерним элементам
//       removeClassActive();
//    }

//    if (menuLink.is(e.target)) { // при переході по ссилці ховаємо меню 
//       removeClassActive();
//    }
// });

// $(window).scroll(function () { // Действие, если выполнен скролл
//    colorHeader();
// });

// $(window).resize(setEqualHeight);//Виконується при зміні розмірів вікна браузера

// function setEqualHeight() {
//    const elementHight = document.querySelector('.menu__link').offsetHeight; //висота елемента списка
//    var elementCount = document.querySelector('.menu__list').children.length //кількість елементів в списку
//    const widthWindowBrowser = document.documentElement.clientWidth; //ширина вікна браузера
//    const heightWindowBrowser = document.documentElement.clientHeight; //висота вікна браузера

//    if (widthWindowBrowser <= 1024) {
//       colorHeader();
//    } else {
//       colorHeader();
//    }

//    console.log(widthWindowBrowser);
//    const temp = (heightWindowBrowser - elementHight * 2) + 20;// висота меню = висоті вікна - 2 елементи
//    //якщо список меню більший за висоту вікна браузера і ширина вікна браузера менша за 1024
//    if (heightWindowBrowser < (elementCount * elementHight + elementHight) && widthWindowBrowser < 1024) {

//       id__menu.style.height = temp + "px"; // встановити висоту списка рівній висоті вікна бруузера мінус один елемент

//       $('.menu__list').addClass('menu__list--scroll');
//    } else {
//       $('.menu__list').removeClass('menu__list--scroll');
//       id__menu.style.height = "auto";
//    }
// }

// function colorHeader() {
//    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    const wrapperMenu = document.querySelector('.wrapper-menu');
//    const headerLogo = document.querySelector('.header__logo');
//    if (wrapperMenu && headerLogo) {
//       if (scrollTop > 200 && scrollTop < 1000) {
//          const color = (scrollTop - 200) / 800;
//          wrapperMenu.style.backgroundColor = 'rgb(87, 133, 155, ' + color + ')'
//          headerLogo.style.backgroundColor = 'rgb(87, 133, 155,' + color + ')';
//       } else {
//          wrapperMenu.style.backgroundColor = 'transparent';
//          headerLogo.style.backgroundColor = 'transparent';
//       }
//       if (scrollTop > 990) {
//          wrapperMenu.style.backgroundColor = 'rgb(87, 133, 155,1)';
//          headerLogo.style.backgroundColor = 'rgb(87, 133, 155,1)';
//       }
//       if (document.documentElement.clientWidth < 1024) {
//          wrapperMenu.style.backgroundColor = 'transparent';
//       }
//    }
// }



//Jquery
// function colorHeader() {
//    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    const wrapperMenu = $('.wrapper-menu');
//    const headerLogo = $('.header__logo');

//    if (scrollTop > 200 && scrollTop < 1000) {
//       const color = (scrollTop - 200) / 800;

//       wrapperMenu.css('background-color', 'rgb(87, 133, 155, ' + color + ')')
//       headerLogo.css('background-color', 'rgb(87, 133, 155, ' + color + ')')
//    } else {
//       wrapperMenu.css('background-color', 'transparent')
//       headerLogo.css('background-color', 'transparent')
//    }
//    if (scrollTop > 990) {
//       wrapperMenu.css('background-color', 'rgb(87, 133, 155,  1)')
//       headerLogo.css('background-color', 'rgb(87, 133, 155, 1)')
//    }
//    if (document.documentElement.clientWidth < 1024) {
//       wrapperMenu.css('background-color', 'transparent')
//    }

// }

//Jquery
function colorHeader() {
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   const element = $('.header__logo, .header__menu .burger, .wrapper-menu');

   if (scrollTop > 200 && scrollTop < 1000) {
      const color = (scrollTop - 200) / 800;
      element.css('background-color', 'rgb(87, 133, 155, ' + color + ')')
   } else {
      element.css('background-color', 'transparent')
   }
   if (scrollTop > 990) {
      element.css('background-color', 'rgb(87, 133, 155, 1)')
   }
   if (document.documentElement.clientWidth < 1024) {
      element.each(function () {
         $(this).hasClass('wrapper-menu') && $(this).css('background-color', 'transparent')
      })
   }
   if (document.documentElement.clientWidth >= 1025) {
      element.each(function () {
         $(this).hasClass('header__logo') && $(this).css('background-color', 'transparent')
      })
   }
}

// function removeClassActive() {
//    //if (x.matches) { // відключаэмо класи при більшому екрані
//    $('.menu-button').find('.menu-icon').removeClass('menu-icon--active');
//    $('.menu').removeClass('menu--active');
//    id__menu.style.height = "auto";
// }