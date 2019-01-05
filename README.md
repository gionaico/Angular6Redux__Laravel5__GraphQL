# Proyect Laravel 5 & Angular 7

## Functionalities
+ **List/Details**
+ **Favourites button**
+ **Buy products and pay with stripe**
+ **See the tracking of my products visited**

## Improvements
+ **Pagination Component**
    - This component can be reused, just need two values and return the current page number to work in other components
+ **Filter Component**
    - This component can be reused to filter products in other component
+ **Redux**
    - This functionality is important when a app go to be big.
    - Favourites
    - Total price in cart
+ **GhaphQl-Apollo**
    - We use this tool to connect frontend and backend.
    - We use queries inside differens places.
    - We use mutations to update a user's favorites-devices list.
    - From laravel we can see the graphql-ui web interface to show the data
+ **Input**    
+ **Output**    
+ **SASS-CSS-Pre processor**    
    - Flexbox
    - root variables
+ **Filters**
+ **Show the last 5 products seen in Details**
+ **Cart**
    - We can buy the products, where are you going to compile in localStorage
    - There is an example of use with redux to show the total price
+ **Stripe**
    - It is used to pay with a card in the cart

+ **Observations**
    - At first we used angular 5.2.9, but due to a compatibility problem with apollo-graphql we had to migrate the project to angular 7
    - Previous project with angle 5.2.9 -> https://github.com/joanDeveloper/Laravel_Angular6.git