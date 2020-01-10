# Back-End

Dummy Data:

Username: admin
Password: password

End Points:
https://foodiefun3.herokuapp.com
GET
/ 
-Tests to see if the backend is working
POST
/api/register
Receives and object that looks like this
{
	username: "chase",
	password: "pass",
	location: "Utah",
	email: "test@test.com"
}
POST
/api/login
Receives and object that looks like this
	{
	"username": "chase",
	"password": "pass"
}
Will return a token and a welcome message, and user id object

All points past this are protected and need authorization to access

POST
/api/auth/restaurant 
Receives and object that looks like this
{
	"name": "test restaurant",
	"typeofcuisine": "fast food",
	"location": "Idaho",
	"hours": "9-5",
	"rating": "5",
	"photourl": "https://sc01.alicdn.com/kf/HTB1E1F.KpXXXXamXVXXq6xXFXXXF/Crinkle-Cut-Fries.jpg"
	“user_id”: 1
}
PUT
/api/auth/restaurant/:id
Receives and object that looks like this
{
	"name": "test resturant",
	"typeofcuisine": "fast food",
	"location": "Idaho",
	"hours": "9-5",
	"rating": "5",
	"photourl": "https://sc01.alicdn.com/kf/HTB1E1F.KpXXXXamXVXXq6xXFXXXF/Crinkle-Cut-Fries.jpg"
}

DEL
/api/auth/restaurant/:id
Deletes object

GET
/api/auth/restaurant
Gets list of all restaurants 

GET
/api/auth/restaurant/:id
Gets list of users restaurants

POST
/api/auth/review 
Receives and object that looks like this
{
	"restaurant_id": 1,
	"typeofcuisine": "fast food",
	"menuitem": "Crinkle Cut Fries",
	"photourl": "https://sc01.alicdn.com/kf/HTB1E1F.KpXXXXamXVXXq6xXFXXXF/Crinkle-Cut-Fries.jpg",
	"price": “$4.99”,
	"itemrating": 3,
	"itemreview": "They were good but were a bit soggy"
}

PUT
/api/auth/review/:id
Receives an object that looks like this
{
	"restaurant_id": 1,
	"typeofcuisine": "fast food",
	"menuitem": "Crinkle Cut Fries",
	"photourl": "https://sc01.alicdn.com/kf/HTB1E1F.KpXXXXamXVXXq6xXFXXXF/Crinkle-Cut-Fries.jpg",
	"price": 4,
	"itemrating": 3,
	"itemreview": "They were good but were a bit soggy"
}


DEL
/api/auth/review/:id
Deletes review with corresponding id


GET
/api/auth/:id/reviews
	-get all reviews for particular restaurant id. Returns an array of object
