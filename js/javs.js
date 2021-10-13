/*Тут крч идет обработка нажатий, если кликнули то добавляется класс и окно открывается*/
$(function () {
    $('#modal_open').click(function () {
        $('.modal_window').addClass('modal_win_active');
    });
    $('.close').click(function (){
        $('.modal_window').removeClass('modal_win_active');
    });
});

