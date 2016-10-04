
$.cloudinary.config({
    cloud_name: 'df1amga7m'
   });



Template.families.events({
    // Submit signup form event
    'submit form': function(e, t){
        // Prevent default actions
        e.preventDefault();

    var file = $('#userimage')[0].files[0];
    console.log(file)
    Cloudinary.upload(file, function(err, res) {
          console.log("Upload Error: " + err);
          console.log("Upload Result: " + res);
        });
    }       
});
