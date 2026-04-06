## Product Api Simulator 
This project simulate a small Product API system typescript and promises.

## Features
. Fetch a product catelog asynchronously
. Fetches Reviews based on product id
. Fetches Sales report after product and review data

## Technologies used
. Typescript
. Promises
. Custom Error classes
. Mock API simulation with setTimeOut

## Project Structure
. apiSimulator.ts
. main.ts

## Custom Error clasess
- NetworkError
- DataError

## How the application works
1. The application first fetches the product catalog info
2. After fetching products, it fetches reviews based on product id
3. Once all products and reviews fetched it fetches sales report
4. if any call fails, the error is handled in the .catch() block
5. The .finally() block logs that all API calls have been attempted

## Challenges faced
One Challenge was understanding how to chain muliple Promise based functions in the correct order


## Reflection
1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
Handling errors makes it easier to understand where exactly the failure happened. 

2. How does using custom error classes improve debugging and error identification?
Custom error classes make errors more meaningfull and easier to identify

3. When might a retry mechanism be more effective than an immediate failure response?
A retry mechanism is more effective when the failure is temporary rather than permanent