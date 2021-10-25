/*Тут крч идет обработка нажатий, если кликнули то добавляется класс и окно открывается*/
$(function () {
    $('#modal_open').click(function () {
        $('.modal_window').addClass('modal_win_active');
        $('.loading-model').css('visibility', 'visible');
    });
    $('.close').click(function (){
        $('.modal_window').removeClass('modal_win_active');
        $('.canvas-container').css('visibility', 'hidden');
        $('.loading-model').css('visibility', 'hidden');
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

/*Здесь я попукаю <3*/

$(function(){
    let i = 0;
    $('.wiewmodel').click(function(){
        if(i == 0){
            $('.loading-model').css('visibility', 'visible');
            $('.canvas-container').css('visibility', 'hidden');
            i += 1;
        }
        else{
            $('.loading-model').css('visibility', 'hidden');
            $('.canvas-container').css('visibility', 'visible');
            i = 0;
        }
    });
});