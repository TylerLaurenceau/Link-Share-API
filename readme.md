#Linkshare API Documentation


##USER
###POST /user/register

Registers a user to the site. Parameters are:
* Username - String
* Password - String


###GET /user/login

Allows users to login. Parameters are:
* Username - String
* Password - String


##POST
###POST /:userid/newPost

Must be Logged In.

Allows users to create new posts. Parameters are:
* Userid - Integer

User must be logged in.


##COMMENT
###POST /:userid/:postid/newComment

Must Be Logged In.

Allows users to make comments on POSTS. Parameters are:
*Userid - Integer
*Postid - Integer
