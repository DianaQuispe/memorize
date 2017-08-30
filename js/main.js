var comidas = ['assets/images/f1.png', 'assets/images/f2.png', 'assets/images/f3.png', 'assets/images/f4.png','assets/images/f1.png', 'assets/images/f2.png', 'assets/images/f3.png', 'assets/images/f4.png'];
comidasEsc = [];
var image;
var  u= 0;
var src;
var contenedor = document.getElementsByClassName('contenedor')[0];
for(var i=0; i<comidas.length; i++) {
    var divs = document.createElement('div');
    divs.setAttribute('class','imgI');

    var image = document.createElement('img');
    image.setAttribute('src', 'assets/images/chatarra.jpg');

    image.setAttribute('class', 'food');
   // comidasEsc = comidas.sort(function() {return Math.random() - 0.5});
  //  image.setAttribute('src', comidasEsc[i]);
    divs.appendChild(image);
    contenedor.appendChild(divs);
}
$('.food').click(function() {
    $(this).attr('src', comidas[u]);
    var src = this.src;
u++;
});


