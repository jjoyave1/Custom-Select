// set initial variable value
var init_val, val;

// $('.select-menu li').hide();
$('.select-menu li[selected]').show();

// event listeners
$('.select-menu').on('click', function (e) {
  init_val = e.target.attributes[0].textContent;

  e.preventDefault();
  e.stopPropagation();

  $('.select-menu-dropdown').fadeIn(200);

  $(document).on('click', function(ev) {
    ev.preventDefault();
    $('.select-menu-dropdown').fadeOut();
  });

  $('.select-menu-dropdown').on('click', function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
  });

  $('.select-menu-dropdown li').on('click', function (ev) {

    var self = this;

    ev.preventDefault();

    val = ev.target.attributes[0].textContent;

    if (val !== init_val) {

      $('.select-menu li[selected]').removeAttr('selected');
      $('.select-menu li[val=' + val + ']').attr('selected','');

      $('.select-menu li').hide();
      $('.select-menu li[selected]').show();

      $('.select-menu-dropdown').fadeOut(200);

    }
  });

  $(this).change();
});

$('.select-menu').on('change', function (e) {
  e.preventDefault();
  e.stopPropagation();
});
