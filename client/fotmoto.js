Template.fotomoto.rendered = function () {
  ! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "//widget.fotomoto.com/stores/script/5cc99805dfda4285a2bdb1f6e75ce067d3f63a36.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, "script", "fotomoto-wjs");
}