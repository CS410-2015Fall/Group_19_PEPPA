document.addEventListener("deviceready", todo);

function todo(){
    console.log("todo ran");
    $('.new').submit(function () {
        // ADD ITEM
        console.log("sumbitted");
        if ( $('#new').val() !== '' ) {
            var item = $('input').val(),
                input = '<input type="text" value="' + item + '" />',
                edit = '<ol><li class="check fa fa-check"></li><li class="delete fa fa-times"></li></ol>';
            $('.list').append('<li class="item">' + input + edit + '</li>');
        };
        // CLEAR INPUT
        $('#new').val('');
        // COLORS
        $('#list .list .item').each(function(e){
            var hue = ( e * 3 );
            $(this).css({ backgroundColor: 'hsl(' + hue + ',75%,50%)' });
            $('ol li', this).each(function(i){
                var o = .1 + ( i * .1 );
                $(this).css({ backgroundColor: 'rgba(0,0,0,' + o + ')' });
            });
        });
        // CHECK & DELETE
        $('#list .list .item ol li').on('click',function(){
            if ( $(this).hasClass('check') ) {
                $(this).parent('ol').parent('.item').find('input').toggleClass('checked');
            } else if ( $(this).hasClass('delete') ) {
                $(this).parent('ol').parent('.item').remove();
            }
        });
        return false;
    });
  // COLORS
    $('#list .list .item').each(function(e){
        var hue = ( e * 3 );
        $(this).css({ backgroundColor: 'hsl(' + hue + ',75%,50%)' });
    $('ol li', this).each(function(i){
      var o = .1 + ( i * .1 );
      $(this).css({ backgroundColor: 'rgba(0,0,0,' + o + ')' });
    });
  });
  // CHECK & DELETE
  $('#list .list .item ol li').on('click',function(){
    if ( $(this).hasClass('check') ) {
        $(this).parent('ol').parent('.item').find('input').toggleClass('checked');
    } else if ( $(this).hasClass('delete') ) {
        $(this).parent('ol').parent('.item').remove();
    }
    });
}