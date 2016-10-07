
Template.dropzone.events({
	'dropped #dropzone': function(e) {
      FS.Utility.eachFile(e, function(file) {
        var newFile = new FS.File(file);
        
        Images.insert(newFile, function (error, fileObj) {
          if (error) {
      		  Materialize.toast("Upload failed... please try again.",4000);
          } else {
            Materialize.toast('Upload succeeded!',4000);
          }
      });
    });
  }
});