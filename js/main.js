

$('#btn_modal_window').on('click', function(){
    $('#modal-dialog').css('display', 'block')
});

$('.close_modal_window').on('click', function () {
   $('#modal-dialog').css('display', 'none')
});

$(window).on('click', function (event) {
   if (event.target == $('#modal-dialog')) {       //почему-то не работает, если нажать на виндоу модальное окно должно закрыться
    $('#modal-dialog').css('display', 'none')
   }
});