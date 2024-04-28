// Jquery
(() => {
  const burger = $('[data-burger]')
  const menu = $('[data-menu]')
  const menuItems = $('[data-menu-item]')
  const overlay = $('[data-menu-overlay]')

  $('body').click((e) => {
    hiddenMenu();
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

  function hiddenMenu() {
    burger.attr('aria-expanded', 'false');
    burger.attr('aria-label', 'Открыть меню')
    burger.removeClass('burger--active')
    menu.removeClass('menu--active')
    // enableScroll()
  }
})()
