var api = 'AIzaSyBuE5M3Rgzeq9SF2rBN1if5wGyVLggyUkE';
var map;
function initMap() {
  var latLng = {
    lat: 20.6772885,
    lng: -103.3856328
  };

  map = new google.maps.Map(document.getElementById('mapa'), {
    'center': latLng,
    'zoom': 14, 
    'mapTypeId': google.maps.MapTypeId.ROADMAP
  });
  var contenido = '<h2>GdlWebCamp</h2>'+
      '<p>Del 10 al 12 de Diciembre</p>'+
      '<p>¡Visitanos!</p>';
  var informacion = new google.maps.InfoWindow({
    content: contenido
  })
  var marker = new google.maps.Marker({
    position:latLng,
    map:map, 
    title: 'GdlWebCamp'
  });
  marker.addListener('click', function(){
    informacion.open(map, marker);
  });
};

(function(){
  'use strict';

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function(){
    //campos datos usuarios
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var resultado = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    //extras
    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');
    if(camisas){
      var calcularMontos = function(e){
        e.preventDefault();
        if(regalo.value === ''){
          alert('Debes elegir un regalo');
          regalo.focus();
        } else {
          var boletosDia = pase_dia.value;
          var boletos2Dias = pase_dosdias.value;
          var boletoCompleto = pase_completo.value;
          var cantCamisas = camisas.value;
          var cantEtiquetas = etiquetas.value;
          var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
          var listadoProductos = [];
          if(boletosDia >= 1) {
            listadoProductos.push(boletosDia + ' Pases por día');
          }
          if(boletos2Dias >= 1) {
            listadoProductos.push(boletos2Dias + ' Pases por 2 días');
          }
          if(boletoCompleto >= 1) {
            listadoProductos.push(boletoCompleto + ' Pases Completos');
          }
          if(cantCamisas >= 1) {
            listadoProductos.push(cantCamisas + ' Camisas');
          }
          if(cantEtiquetas >= 1) {
            listadoProductos.push(cantEtiquetas + ' Etiquetas');
          }
          resultado.style.display = "block";
          resultado.innerHTML = '';
          for( var i = 0; i < listadoProductos.length; i++){
            resultado.innerHTML+= listadoProductos[i] + '<br/>';
          }
          suma.innerHTML = "$ " + totalPagar.toFixed(2);

          console.log(listadoProductos);
        };
      };
      var mostrarDatos = function () {
        var boletosDia = pase_dia.value;
        var boletos2Dias = pase_dosdias.value;
        var boletoCompleto = pase_completo.value;
        var diasElegidos = [];
        if( boletosDia > 0){
          diasElegidos.push('viernes');
        }
        if( boletos2Dias > 0){
          diasElegidos.push('viernes', 'sabado');
        }
        if( boletoCompleto > 0){
          diasElegidos.push('viernes', 'sabado', 'domingo');
        }
        for(var i = 0; i < diasElegidos.length; i++){
          document.getElementById(diasElegidos[i]).style.display = 'block';
        }
      };

      var validarNombre = function (){
        if(this.value == '') {
          errorDiv.style.display = 'block';
          errorDiv.innerHTML = 'Este campo es obligatorio';
          this.style.border = '1px solid red';
          errorDiv.style.border = '1px solid red';
        } else {
          errorDiv.style.display = 'none';
          this.style.border = '1px solid #ccc';
        }
      };

      var validarEmail = function (){
        if (this.value.indexOf('@') > -1){
          errorDiv.style.display = 'none';
          this.style.border = '1px solid #ccc';
        } else {
          errorDiv.style.display = 'block';
          errorDiv.innerHTML = 'Debe tener al menos una @';
          this.style.border = '1px solid red';
          errorDiv.style.border = '1px solid red';
        }
      }
      calcular.addEventListener('click', calcularMontos);
      pase_dia.addEventListener('blur', mostrarDatos);
      pase_dosdias.addEventListener('blur', mostrarDatos);
      pase_completo.addEventListener('blur', mostrarDatos);
      nombre.addEventListener('blur', validarNombre);
      apellido.addEventListener('blur', validarNombre);
      email.addEventListener('blur', validarNombre);
      email.addEventListener('blur', validarEmail);

    }
  }); //Dom content loaded
})();

$(function(){ 
  //lettering 
  $(".nombre-sitio").lettering();

  //menu fijo
  var windowHeight = $(window).height();
  var barraAltura= $('.barra').innerHeight();

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > windowHeight){
      $('.barra').addClass('fixed');
      $('body').css({'margin-top': barraAltura + 'px'});
    } else {
      $('.barra').removeClass('fixed');
      $('body').css({'margin-top': '0px'});
    }
  });
  //menu responsive
  $('.menu-movil').on('click', function(){
    $('.navegacion-principal').slideToggle();
  })

  //programa conferencias
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');
  $('.menu-programa a').on('click', function(){
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(100);
    return false;
  });

  //animacion para los numeros
  $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 6 }, 1200);
  $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 15 }, 1200);
  $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 1500);
  $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 9 }, 1800);

  //cuenta Regresiva
  $('.cuenta-regresiva').countdown('2017/12/24 09:00:00', function (event) {
    $("#dias").html(event.strftime('%D'));
    $("#horas").html(event.strftime('%H'));
    $("#minutos").html(event.strftime('%M'));
    $("#segundos").html(event.strftime('%S'));
  })
});