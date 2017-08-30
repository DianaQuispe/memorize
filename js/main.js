   comidas = ['assets/images/f1.png', 'assets/images/f2.png', 'assets/images/f3.png', 'assets/images/f4.png', 'assets/images/f1.png', 'assets/images/f2.png', 'assets/images/f3.png', 'assets/images/f4.png'];
   var todos;
   var primero = [];
   var segundo = [];
   var tercero = [];
   var cuarto = [];
   //  if ($('.primero')) {}
   //var chatarra = $('.ch');
   //   var imagenes = $('img');

   $('img').click(function () {
       var ids = $(this).parent().attr('id');
       var ids = parseInt(ids);
       this.src = comidas[ids - 1];
       console.log(this.src);
       if ($(this).hasClass('primero')) {
           primero.push(this);
           $(this).fadeOut;
       } else if ($(this).hasClass('segundo')) {
           segundo.push(this);

       } else if ($(this).hasClass('tercero')) {
           tercero.push(this);
       } else if ($(this).hasClass('cuarto')) {
           cuarto.push(this);
       };
       if (primero.length == 2) {
           $('.primero').remove();
       } else if (segundo.length == 2) {
           $('.segundo').remove();
       } else if (tercero.length == 2) {
           $('.tercero').remove();
       } else if (cuarto.length == 2) {
           $('.cuarto').remove();
       }
   });

   /*
      var todos = [];
       todos.push(this.src);
       console.log(todos);
     $('img').each(function () {

   })
      if ($(this).hasClass('primero')) {
           primero.push(this);

       } else if ($(this).hasClass('segundo')) {
           segundo.push(this);
           $(this).remove('imgI');

       } else if ($(this).hasClass('tercero')) {
           tercero.push(this);
       } else {
           cuarto.push(this);
       };
       for (var i = 0; i < comidas.length; i++) {

       }
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

   image.setAttribute('class', 'food clase');
   // comidasEsc = comidas.sort(function() {return Math.random() - 0.5});
   //  image.setAttribute('src', comidasEsc[i]);
   divs.appendChild(image);
   contenedor.appendChild(divs);
   }
   var clicko = 1;
   var todos = [];
   $('img').click(function(i) {
   if(clicko == 1 ) {
   alert(clicko);

   }
   clicko++;

   $(this).attr('src', comidas[u]);

   todos.push(this.src);

   for(var t = 0; t<comidas.length; t++) {
   if(this.src == comidas[t]) {
   alert((this).src);

   }
   clicko =0;

   // $(this).fadeOut();

   }
   var src = this.src;
   u++;

   });

   */
