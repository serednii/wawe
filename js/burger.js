

// Jquery
(() => {
  const burger = $('[data-burger]')
  const menu = $('[data-menu]')
  const menuItems = $('[data-menu-item]')
  const overlay = $('[data-menu-overlay]')

  $('body').click((e) => {
    // if ($(e.target.closest('.header__menu')).length === 0 && $(e.target.closest('.burger')).length) {
    hiddenMenu();
    // }
  })

  document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
      menu.hasClass('menu--active') && hiddenMenu()
    }
  });

  burger.click((e) => {
    burger.toggleClass('burger--active')
    menu.toggleClass('menu--active')

    if (menu.hasClass('menu--active')) {
      burger.attr('aria-expanded', 'true')
      burger.attr('aria-label', 'Закрыть меню')
      // disableScroll()
    } else {
      burger.attr('aria-expanded', 'false')
      burger.attr('aria-label', 'Открыть меню')
      // enableScroll()
    }
    e.stopPropagation()
  })

  // overlay.click(() => {
  //   hiddenMenu()

  // })

  // menuItems.click((e) => {
  //   hiddenMenu()
  //   e.stopPropagation()
  // })


  function hiddenMenu() {
    burger.attr('aria-expanded', 'false');
    burger.attr('aria-label', 'Открыть меню')
    burger.removeClass('burger--active')
    menu.removeClass('menu--active')
    // enableScroll()
  }
})()


// // JavaScript
// function burger() {
//   const burger = document?.querySelector('[data-burger]')
//   const menu = document?.querySelector('[data-menu]')
//   const menuItems = document?.querySelectorAll('[data-menu-item]')
//   const overlay = document?.querySelector('[data-menu-overlay]')

//   document.body.addEventListener('click', e => {
//     if (!e.target.closest('.header__menu') && !e.target.closest('.burger')) {
//       menu.classList.contains('menu--active') && hiddenMenu()
//     }
//   })

//   document.addEventListener('keydown', function (event) {
//     if (event.code == 'Escape') {
//       menu.classList.contains('menu--active') && hiddenMenu()
//     }
//   });

//   burger?.addEventListener('click', () => {

//     burger?.classList.toggle('burger--active')
//     menu?.classList.toggle('menu--active')

//     if (menu?.classList.contains('menu--active')) {
//       burger?.setAttribute('aria-expanded', 'true')
//       burger?.setAttribute('aria-label', 'Закрыть меню')
//       // disableScroll()
//     } else {
//       burger?.setAttribute('aria-expanded', 'false')
//       burger?.setAttribute('aria-label', 'Открыть меню')
//       // enableScroll()
//     }
//   })

//   overlay?.addEventListener('click', () => {
//     hiddenMenu()
//   })

//   menuItems?.forEach(el => {
//     el.addEventListener('click', () => {
//       hiddenMenu()
//     })
//   })

//   function hiddenMenu() {
//     burger?.setAttribute('aria-expanded', 'false')
//     burger?.setAttribute('aria-label', 'Открыть меню')
//     burger.classList.remove('burger--active')
//     menu.classList.remove('menu--active')
//     // enableScroll()
//   }
// }


//  const disableScroll = () => {
//   const fixBlocks = document?.querySelectorAll('.fixed-block');
//   const pagePosition = window.scrollY;
//   const paddingOffset = `${(window.innerWidth - vars.bodyEl.offsetWidth)}px`;

//   vars.htmlEl.style.scrollBehavior = 'none';
//   fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
//   vars.bodyEl.style.paddingRight = paddingOffset;
//   vars.bodyEl.classList.add('dis-scroll');
//   vars.bodyEl.dataset.position = pagePosition;
//   vars.bodyEl.style.top = `-${pagePosition}px`;
// }

//  const enableScroll = () => {
//   const fixBlocks = document?.querySelectorAll('.fixed-block');
//   const body = document.body;
//   const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
//   fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
//   vars.bodyEl.style.paddingRight = '0px';

//   vars.bodyEl.style.top = 'auto';
//   vars.bodyEl.classList.remove('dis-scroll');
//   window.scroll({
//     top: pagePosition,
//     left: 0
//   });
//   vars.bodyEl.removeAttribute('data-position');
//   vars.htmlEl.style.scrollBehavior = 'smooth';
// }
