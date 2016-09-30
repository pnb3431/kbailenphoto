
$(document).ready(function(){
      $('.parallax').parallax();
});



Router.route('/', function () {
  this.layout('ApplicationLayout');
  // render the Post template into the "main" region
  // {{> yield}}
  this.render('Home');
});

Router.route('/contact', function () {
this.layout('ApplicationLayout');
  // render the Post template into the "main" region
  // {{> yield}}
  this.render('Contact');
});