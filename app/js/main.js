(function($) {

// add class to wrapper
if ($('.select-menu').parent().length === 0) {
    alert('<ul class="select-menu" must have parent wrapper.');
    return false;
}

if ($('.select-menu').length > 0 ) {

    // set initial variable value
    var init_val, val;
    var menu_length = $('.select-menu li').length;

    // $('.select-menu li').hide();
    $('.select-menu li[selected="selected"]').show();

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

            ev.preventDefault();

            val = ev.target.attributes[0].textContent;

            if (val !== init_val) {

              $('.select-menu li[selected]').removeAttr('selected');
              $('.select-menu li[val=' + val + ']').attr('selected','selected');

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


    // styles
    $('.select-menu-dropdown').css({
      'position'        : 'absolute',
      'top'             : '0px',
      'left'            : '13px',
      'width'           : '122px',
      'list-style'      : 'none',
      'border'          : 'solid 1px #555',
      'padding'         : '0',
      'background-color': '#EEE',
      'display'         : 'none',
      'border-radius'   : '2px'
    })

    $('.select-menu-dropdown li').css({
      'margin'      : '0',
      'padding'     : '0',
      'padding-left': '9px',
      'height'      : '20px',
      'text-align'  : 'left',
      'cursor'      : 'default'
    });

    // hover handlers
    for (var j = 1; j <= $('.select-menu-dropdown li').length; j++ ) {
      $('.select-menu-dropdown li:nth-child(' + j + ')').on('mouseenter', function (ev) {
        ev.preventDefault();
        $(this).css('background-color', '#0F9FAE');
      });

      $('.select-menu-dropdown li:nth-child(' + j + ')').on('mouseleave', function (ev) {
        ev.preventDefault();
        $(this).css('background-color', '#EEE');
      });

    }

}

})(jQuery);
