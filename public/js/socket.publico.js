// Comando para establecer la conexion
var socket = io();

var lblticket1 = $('lblTicket1');
var lblticket2 = $('lblTicket2');
var lblticket3 = $('lblTicket3');
var lblticket4 = $('lblTicket4');

var lblescritorio1 = $('lblEscritorio1');
var lblescritorio2 = $('lblEscritorio2');
var lblescritorio3 = $('lblEscritorio3');
var lblescritorio4 = $('lblEscritorio4');

var lblTickets = [lblticket1, lblticket2, lblticket3, lblticket4];
var lblEscritorios = [
  lblescritorio1,
  lblescritorio2,
  lblescritorio3,
  lblescritorio4,
];

socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
  console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(data) {
  //   console.log(data);

  data.ultimos4.forEach((element, index) => {
    $(`#lblTicket${index + 1}`).text('Ticket ' + element.numero);
    $(`#lblEscritorio${index + 1}`).text('Escritorio ' + element.escritorio);
  });
});

socket.on('ultimos4', function(data) {
  var audio = new Audio('audio/new-ticket.mp3');
  audio.play();
  data.ultimos4.forEach((element, index) => {
    $(`#lblTicket${index + 1}`).text('Ticket ' + element.numero);
    $(`#lblEscritorio${index + 1}`).text('Escritorio ' + element.escritorio);
  });
});
