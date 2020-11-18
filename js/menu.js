$(".menu-btn").click(function() { 
  $('#modal-menu').slideToggle(200);
});

$(".m-menu-close").click(function() { 
  $('#modal-menu').slideToggle(200);
});

$(".m-open-ul").click(function() { 
  $('#m-ul').slideToggle(200);
  $(".m-open-ul").toggleClass('m-a-is-active');
});
