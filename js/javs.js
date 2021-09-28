window.onload = function()
{
   
    var nav_link = document.getElementsByClassName('nav_link');
    var cat_nav_link = document.getElementsByClassName('cat_nav_link');
    for (i=0; i<3; i++)
    {
        nav_link[i].addEventListener("click", Pidor);
        cat_nav_link[i].addEventListener("click", Pidor);

    }
}

function Pidor()
{
    //Отсылка не Лебовcки )))
    window.alert("Все нормально,фотки на месте!!!")
}
