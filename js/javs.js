/*Тут крч идет обработка нажатий, если кликнули то добавляется класс и окно открывается*/
$(function () {
    $('#modal_open').click(function () {
        $('.modal_window').addClass('modal_win_active');
    });
    $('.close').click(function (){
        $('.modal_window').removeClass('modal_win_active');
    });
});

$(function () {
    let i = 0;
    $('#cat_open').click(function () {
        if(i == 0){
            $('.cat_menu').css('display', 'inline-block');
            i += 1;
        }
        else{
            $('.cat_menu').css('display', 'none');
            i = 0;
        }
    }); 
});

