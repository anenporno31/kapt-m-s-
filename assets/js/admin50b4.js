  $('a[href*=users_]').bind('click', function(e) {
    $($(this).attr('href')).slideToggle(500);
  })