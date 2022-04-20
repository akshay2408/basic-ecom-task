## ECommerce Challenge:

# Technologies used:
-  React: Frontend app
-  Redux: state management tool
-  axios: Api integration
-  Node JS/Express JS: Backend
-  File system with Promised: create apis [as no database support was required]
-  JWT-webtoken (for user authenticate user we provided token with 1 day expiration)


## Project Setup
- Clone Repo :https://github.com/akshay2408/basic-ecom-task.git

# Backend 
1. cd server
  - env variable has been used you must also have on your machine
  - I have pushed `.env.example' at my end, create your own inside server root directory by below command (for linux only):

  `cp .env.example .env`

  - or manually by creating a file in server directory by name '.env' and copy the content of '.env.example' in it.

2. npm install (for setup backend dependency)
3. npm start (for starting development server)


# Frontend
1. open a new terminal and go to 'client' directory `cd client`
2. npm install (for installing frontend dependency)
3. npm start ( for starting frontend development server)


# Feature 
  - Customer login and registration with auth token(jwt)
  - Category & product browsing
  - Check product details inside a modal
  - Shopping cart with Add to cart, remove and update cart item
  - Total Invoice with product count and price respectively
  - Make secure api request to backend via JWT token concept 


# Note: 
- According to task discription statement "No database support needs to be included, I have use mock data"
- And use filesystem and promise concepts to create APIs.
- I have create separate file with name "util" for handle file system fuctionality




