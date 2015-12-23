(function(){

  var body = document.getElementsByTagName('body')[0];
  var preloadImg = document.createElement('img');
  var imgUrl = '/img/bg-mountains-natural.jpg';

  preloadImg.onload = function(e) {
    body.setAttribute('style', 'background-image: url(' + imgUrl + ');');
  };

  preloadImg.src = imgUrl;

})();
