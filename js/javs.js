onload = function()
{
    var img_grounds = ['images/VEL.png',
                       'images/dino.png'];
    var t = 3;
    setInterval(function()
                {
                    var p = img_grounds.shift();
                    header = document.getElementsByClassName('header');
                    header[0].animate({opacity: '0'}, 1500)
                    header[0].style.backgroundImage = 'url(' + p +')';
                    header[0].animate({opacity: '1'}, 1500)
                    img_grounds.push(p);
                }, t * 1000);
}
