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