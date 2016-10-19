




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
  this.render('files', {to: 'files'});
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
Router.route('/admin', function () {
  this.render('admin');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('imageUploader', {to: 'imageUploader'});
  this.render('title', {to: 'title'});
  this.render('loginButtons', {to: 'loginButtons'});
  this.layout('ApplicationLayout');
  this.render('files', {to: 'files'});
  this.render('file', {to: 'file'});
  

});

Template.ApplicationLayout.onRendered(function(){
	$('.parallax').parallax();
	$('.dropdown-button').dropdown();
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
  $('#textarea1').trigger('autoresize')
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

Template.Home.onRendered(function(){
	$('.parallax').parallax();
});
Template.navbar.onRendered(function(){
  $(".button-collapse").sideNav();
});


Template.pricing.onRendered(function(){
  $('.parallax').parallax();
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

Template.families.onRendered(function(){
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
});
Template.contact.onRendered(function(){
	$('#textarea1').trigger('autoresize');
  $('.parallax').parallax();
});
Template.admin.onRendered(function(){
  $('.slider').slider({full_width: true});
  $('.carousel').carousel();
  $('.materialboxed').materialbox();
  $("#input-field").val();
  $('select').material_select();
});
Template.file.onRendered(function(){
  $('.slider').slider({full_width: true});
  $('.carousel').carousel();
  $('.materialboxed').materialbox();
});
Template.files.onRendered(function(){
  $('.slider').slider();
  $('.carousel').carousel();
  $('.materialboxed').materialbox();
});

Template.file.events = {
  "click .btn" : function () {
    // Remove from S3 and Database.
    Meteor.call('removePhotoData', this._id);
  }
};



