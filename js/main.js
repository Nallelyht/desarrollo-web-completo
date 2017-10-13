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

    //extras
    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');
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
        resultado.innerHTML='';
        for( var i = 0; i < listadoProductos.length; i++){
          resultado.innerHTML+= listadoProductos[i] + '<br/>';
        }


        console.log(listadoProductos);
      }
    }
    calcular.addEventListener('click', calcularMontos);


  }); //Dom content loaded
})();