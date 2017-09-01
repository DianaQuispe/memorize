var inicio = document.getElementsByClassName('inicio')[0];
let comidas = [['f0.png','f1.png','f2.png','f3.png','f4.png'],['f5.png','f6.png','f7.png','f8.png','f9.png'],['f0.png','f1.png','f2.png','f3.png','f4.png'],['f5.png','f6.png','f7.png','f8.png','f9.png']];
var table = document.createElement('table');
for(var i=0; i<comidas.length; i++) {
    var tr = document.createElement('tr');
    for(var j=0; j<comidas[i].length; j++) {
        var td = document.createElement('td');
        var img = document.createElement('img');
        img.setAttribute('src','assets/images/'+comidas[i][j]);
        var ids = comidas[i][j].slice(1,2);
        img.setAttribute('id','f'+ids)
        img.setAttribute('class', 'images');
        td.appendChild(img);
        tr.appendChild(td);

    }
    table.appendChild(tr);
    inicio.appendChild(table);


}
var idBorr;
var escogidos =[];
var masde3 = [];
var resueltos = [];
var todos =  [];
var voltear =[];
var clicko =0;
var numerito = 0;
var pics = false;
var  id1,id2;
$('img').click(function($this){
    $(this).removeClass('inicial').addClass('images');
    $(this).attr('src','assets/images/'+this.id+'.png');
    // todos.push(this.id);
    // var escogido = document.getElementsByClassName('escogido');
    $(this).addClass('escogido');

    masde3.push(this.id);
    todos.push(this.id);
    if(todos.length ==2) {
        if(todos[0] == todos[1] ){
            var id1 = todos[0];
            var id2 = todos[1];
            $('#'+ id1).remove();
            $('#'+ id2).remove();

            resueltos.push(this.id);
            //  $(" .escogido").fadeOut();
            //escogidos.push(resueltos[0]);
            //escogidos.push(resueltos[1]);
            todos =[];
        }else if(todos.length) {
            todos.push(this.id);
            //   $(this).removeClass('images').addClass('inicial');
            // $(this).removeAttr('src');
            todos = [];
        }


        if(masde3 >1 ) {
            var idBorr =masde3[0];
            //  masde3.v();
            masde3.push(masde3.splice(0,4));
            var idb =masde3[0];
            var idb2 = masde3[1];
            $('#id'+idb[0]).removeAttr('src');
            $('#id'+idb[0]).removeClass('images').addClass('inicial');
            $('#id'+idb2).removeAttr('src');

            //console.log($('.escogido')[$('.escogido').length-2]);
            var noUltimos = $('.escogido')[$('.escogido').length-2];
             $(this).removeClass('images').addClass('inicial');
             $(this).removeAttr('src');
            console.log(noUltimos.src);
            $('.escogido')[$('.escogido').length-2].removeAttr('src');
            $(('.escogido').length-2).removeClass('images').addClass('inicial');
            //var borrarLista = escogido.pop();
            //  alert(noUltimos);
            //console.log('borrar:' +idBorr +'masde3'+ masde3);
            // $(this).removeClass('images').addClass('inicial');
            clicko ==1;
            todos = [];

        }
        clicko++;
        console.log(clicko);
        todos = [];


    }
});
$('#botonStart').click(function(){
    $('img').removeAttr('src');
    //$('.images').remove();
    $('img').removeClass('images').addClass('inicial');
    //  ;ss('src','/assets/images/chef.png');
    let src = '';
    $('#h1').fadeOut();
})
$('#botonStart').dblclick(function(){
    alert('g');
})


/* 
   var comidas = ['assets/images/f1.png', 'assets/images/f2.png', 'assets/images/f3.png', 'assets/images/f4.png', 'assets/images/f5.png', 'assets/images/f6.png', 'assets/images/f7.png', 'assets/images/f8.png','assets/images/f9.png', 'assets/images/f10.png'];

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
       if (primero.length >= 2) {
           $('.primero').remove();
       } else if (segundo.length >= 2) {
           $('.segundo').remove();
       } else if (tercero.length >= 2) {
           $('.tercero').remove();
       } else if (cuarto.length >= 2) {
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
 
 





















