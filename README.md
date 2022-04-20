

## Front-End:

# Tool
-  React ^17.0.2
-  Redux (state management tool)
 
# Feature 
-   Customer login
-   Category & product browsing
-   Product details
-   Shopping cart


## Back-End:

# Note: 
- According to task discription statement "No database support needs to be included, use mocked data"
- for backend carts fuctionality we have used file structure for updating mocked data
- we have create separate file with name "util" for handle file system fuctionality

# Tool
- Node v14.18.3
- Express ^4.17.3
- jwt-webtoken (for user authenticate user we provided token with 1 day expiration)

# Feature 
- we have create apis for user registration , login ,Products, carts
- handle all carts opretion like add_to_cart/update_cart/remove_cart
- we have authenticate user for each operation
- 

## Project Setup
- Clone Repo :https://github.com/akshay2408/basic-ecom-task.git

# Frontend
1. cd client
2. npm install (for installing frontend dependency)
3. npm start ( for starting frontend development server)

# Backend 
1. cd server
  - we need .env setup to handling project environments
  - For Example:
      PORT=8000
      JWT_SECRET_KEY = gfg_jwt_secret_key
      TOKEN_HEADER_KEY = gfg_token_header_key

2. npm install (for setup backend dependency)
3. npm start (for starting development server)



