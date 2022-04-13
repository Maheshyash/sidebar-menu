$(".header__menu__hamburger, .sidebar__panels--close button").on("click", function() {
    $(".collapse__menus").addClass('collapse__menus-isactive')
    $('body').toggleClass("header-active");
    $(".sidebar__panels").toggleClass("sidebar__panels--is-visible");
    $(".sidebar__panel--top-level").removeClass("sidebar__panel--level-two-active").removeClass("sidebar__panel--level-three-active");
    $(".sidebar__panel--sub").removeClass("sidebar__panel--second-level--active").removeClass("sidebar__panel--third-level--active");
  })
  $(".sidebar__list-item__level-one--btn").on("click", function() {
    const activeState = $(this).siblings(".sidebar__panel--second-level").hasClass("sidebar__panel--second-level--active");
    $(".sidebar__panel--second-level").removeClass("sidebar__panel--second-level--active")
    $(".sidebar__panel--third-level").removeClass("sidebar__panel--third-level--active");
    if(!activeState) {
      $(this).siblings(".sidebar__panel--second-level").addClass("sidebar__panel--second-level--active");
    }
    $(".sidebar__panel--top-level").toggleClass("sidebar__panel--level-two-active");
  })
  $(".sidebar__list-item__level-two--btn").on("click", function() {
    $(this).siblings(".sidebar__panel--third-level").toggleClass("sidebar__panel--third-level--active");
    $(".sidebar__panel--top-level").toggleClass("sidebar__panel--level-three-active");
  })
  // Level 02 Back button
  $(".sidebar__list__level-two--back-btn").on("click", function() {
    $(this).parents(".sidebar__panel--sub").removeClass("sidebar__panel--second-level--active")
    $(".sidebar__panel--top-level").removeClass("sidebar__panel--level-two-active");
    $(".sidebar__list__level-three--back-btn").parents(".sidebar__panel--sub").removeClass("sidebar__panel--third-level--active")
    $(".sidebar__panel--top-level").removeClass("sidebar__panel--level-three-active");
  })
  // Level 03 Back button
  $(".sidebar__list__level-three--back-btn").on("click", function() {
    $(this).parents(".sidebar__panel--sub").removeClass("sidebar__panel--third-level--active")
    $(".sidebar__panel--top-level").removeClass("sidebar__panel--level-three-active");
  })
  $('.collapse__menus').on("click",function(){
      $(".sidebar__panels").removeClass("sidebar__panels--is-visible");
    $(".sidebar__panel--top-level").removeClass("sidebar__panel--level-two-active").removeClass("sidebar__panel--level-three-active");
    $(".sidebar__panel--sub").removeClass("sidebar__panel--second-level--active").removeClass("sidebar__panel--third-level--active");
      $('.collapse__menus').removeClass('collapse__menus-isactive')
  })