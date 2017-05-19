 //language on change
 $('.language li').on('click', function(){
 	$('.language li').removeClass('active-lang');
 	$(this).toggleClass('active-lang');
 })
 // Bootstrap smooth dropdown
 $('.navigation__dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

 $('.navigation__dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

 //mobile button
 $('.mobile-nav').on('click', function(){
 	$('.mobile-nav__item').toggleClass('active-btn');
 	$('.links_container').toggleClass('open_container');
 })