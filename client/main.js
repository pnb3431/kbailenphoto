




Router.route('/', function () {
  this.render('Home');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Router.route('/pricing', function () {
  this.render('pricing');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Router.route('/contact', function () {
  this.render('contact');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/families', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/children', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/babies', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Router.route('/maternity', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/seniors', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
});
Router.route('/couples', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
});
Router.route('referrals', function () {
  this.render('referrals');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Template.ApplicationLayout.onRendered(function(){
	$('.parallax').parallax();
	$('.dropdown-button').dropdown();
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
  	$('#textarea1').trigger('autoresize')
});

Template.Home.onRendered(function(){
	$('.parallax').parallax();
});

Template.families.onRendered(function(){
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
});
Template.contact.onRendered(function(){
	$('#textarea1').trigger('autoresize')
});

