# Food Delivery Application

## Tools Used
 - ReactJs
 - Nodejs
 - Express

## Storage of data
- 3 arrays of object is being used
    1. `itemList` - storing food items in restaurants
    2. `orderList` - storing orders customer to restaurants
    3. `userList` - storing users (customers/restaurants)


## Api's
- backend Api's are divided into 3 parts
    1. `orderRoute` - adding orders, removing orders, showing ordered items, showing orders to restaurants
    2. `restaurantRoute` - getting all food items in restaurants, adding food items in menu, removing food items from menu
    3. `userRoute` - Register Customers/Restaurants, login, logout, checking user is already logged in or not

## Authentication
- Token is being stored in `cookies` for security
- Token will be passed while calling Api from Frontend, and will be verified by `auth` middleware, then only Api's will return results else Error Statements

## Frontend Components

1. `Authorization Components` - Login, Logout, Register window
2. `Customer Components` - Checking Order List, Ordering Food
3. `Restaurants Components` - Return All Restaurants list, Returning Food Item list after clicking any Restaurants, Adding/Removing Items in Menu, Getting List of Orders 
4. `Navbar` - Navbar will show Options depends on User is Logged In or Not, Authentication of User us being checked using token stored in cookies by Auth apis in backend
5. React Hooks is being used for maintaining States
