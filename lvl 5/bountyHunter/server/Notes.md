



# status Codes 
these are 5 common ones 

#200 - Successful Request

#201 - successful insert /successful update

#401 - unauthorized 

#404 - Not found

#500 - Server Error

#for all status codes https://http.cat

# middleware 
#what is it - app.use()
1(optinal) - mount path (endpoint)
2 callback function - receives the request response objkects also the "next" funcction

#the "next" function
moves on to the middleware in line on our server

# Data Bases
#Relational - SQL, Postgres
relational is strict all information must be filled
ID is PrimaryKey for SQL
SQL uses tables to use info like a excele spread sheet

# Three big Data bases relationships
one to one - you and social security number
one to many - users to todo post 
ID one is given to the many which would be a foreign key  
many to many - users to product like amazon 

#Non-Relational - MongoDB
#Collections - think of arrays []

#documents - think of objects {}

user{
    name:string,
    age:number,
    _id:88nhgf primary key 
}
this is a blueprint to follow when making a new user 

Todo{
    title:string,
    _id:9uojoj,
    user:ObjectID From user this is foreign key 
}
# MongoDB does not inforcing Data which is very loose 
we use this to store data but Mongoose enforces Data Rigidity or strict

# why mongoose
purpose - create models and Query data

# mongoose Scxhema 
think of a blueprint for our data

# mongoose Models 
models have a Name, and use Blueprint aka schema 
modles are used to perform the CRUD (Create,Read,Update,Delete)operations on data creat with the model

Models folder first which you name your data then use routes to intract