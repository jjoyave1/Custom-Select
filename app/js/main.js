// $('.select-menu li').hide();
$('.select-menu li[selected]').show();

// event listeners
$('.select-menu').on('click', function (e) {
  var init_val = e.target.attributes[0].textContent;

  e.preventDefault();
  e.stopPropagation();

  $('.select-menu-dropdown').fadeIn(200);

  $(document).on('click', function(ev) {
    ev.preventDefault();
    $('.select-menu-dropdown').fadeOut(400);
  });

  $('.select-menu-dropdown').on('click', function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
  });

  $('.select-menu-dropdown li').on('click', function (ev) {

    var self = this;

    ev.preventDefault();

    var val = ev.target.attributes[0].textContent;

    console.log(val, init_val); ///stacking for some reason

    if (val !== init_val) {

      $('.select-menu li[selected]').removeAttr('selected');
      $('.select-menu li[val=' + val + ']').attr('selected','');

      $('.select-menu li').hide();
      $('.select-menu li[selected]').show();

      $('.select-menu-dropdown').fadeOut(400);

    }
  });

  $(this).change();
});

$('.select-menu').on('change', function (e) {
  console.log('changes');
});
