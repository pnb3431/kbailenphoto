#SERVER
Cloudinary.config
    cloud_name: 'df1amga7m'
    api_key: '626985792414165'
    api_secret: 'iAsKzMluVhX7fViZGV49Lczt9Q8'

# Rules are all optional
Cloudinary.rules.delete = ->
    @userId is "my_user_id" # The rule must return true to pass validation, if you do not set a rule, the validation will always pass
    @public_id # The public_id that is being deleted

Cloudinary.rules.signature = -> # This one checks whether the user is allowed to upload or not
    @userId is "my_user_id" # The rule must return true to pass validation, if you do not set a rule, the validation will always pass

Cloudinary.rules.private_resource = ->
    @userId is "my_user_id" # The rule must return true to pass validation, if you do not set a rule, the validation will always pass

Cloudinary.rules.download_url = ->
    @userId is "my_user_id" # The rule must return true to pass validation, if you do not set a rule, the validation will always pass

#CLIENT
$.cloudinary.config
    cloud_name:"cloud_name"