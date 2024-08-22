var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("body #content").find("*"); // Encontra todos os elementos dentro de #content

// Quantidade de incremento ou decremento em pixels
var aumentarFontes = 25; // Ajuste conforme necessário
var diminuirFontes = 4;

// Função para aumentar o tamanho da fonte
function aumentarFonte() {
  $elemento.each(function() {
    var tamanhoAtual = parseFloat($(this).css('font-size'));
    $(this).css('font-size', (tamanhoAtual + aumentarFontes) + 'px');
  });
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
  $elemento.each(function() {
    var tamanhoAtual = parseFloat($(this).css('font-size'));
    $(this).css('font-size', (tamanhoAtual - diminuirFontes) + 'px');
  });
}

// Associar funções aos eventos de clique
$btnAumentar.on('click', aumentarFonte);
$btnDiminuir.on('click', diminuirFonte);

$(document).ready(function() {
  // Verifica se o modo de acessibilidade está ativado e aplica a classe
  if (localStorage.getItem('accessibility') == 'on') {
    $("body").addClass("accessibility");
  }

  // Manipulador para ativar o modo de acessibilidade
  $(".contrasteOn").click(function() {
    localStorage.setItem('accessibility', 'on');
    $("body").addClass("accessibility");
  });

  // Manipulador para desativar o modo de acessibilidade
  $(".contrasteOff").click(function() {
    localStorage.removeItem('accessibility'); // Remove a chave do localStorage
    $("body").removeClass("accessibility");
  });
});