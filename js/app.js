(function(){

  var body = document.getElementsByTagName('body')[0];
  var preloadImg = document.createElement('img');
  var imgUrl = '/img/bg-mountains-natural.jpg';

  // Stop the FUC
  body.setAttribute('style', 'visibility: visible;');

  preloadImg.onload = function(e) {
    var styles = body.getAttribute('style');
    body.setAttribute('style', 'background-image: url(' + imgUrl + ');' + styles);
  };

  preloadImg.src = imgUrl;

})();
