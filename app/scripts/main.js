$(function() {
  var userLang = navigator.language || navigator.userLanguage;
  $('html').addClass('lang-' + userLang.substring(0, 2));
});


