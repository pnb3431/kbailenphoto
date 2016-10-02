
$(document).ready(function(){
      $('.parallax').parallax();
    });

Router.route('/', function () {
  this.render('Home');
});