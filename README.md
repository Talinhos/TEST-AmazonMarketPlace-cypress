# Amazon search automation project with Cypress

>For automation, 5 tests were defined using the search engine and adding to the shopping cart and validating

1. Search for a product and apply the <Free Shipping> selection filter
2. Search for a product in the search field, check if the suggested suggestion quantity is equal to 10
3. Search for a product added to the pre-configured quantity in the shopping cart and confirm that the result agrees
4. Search for a product, add it to the cart, change the quantity and check if it is correct
5. Adds a product to the shopping cart, deletes it from the cart and confirms that it has really been removed  

## Installation

To start the node 
```sh
npm init --yes
```
Installing Cypress (used version 12.5.0)
```sh
npm install -D cypress@12.5.0
```

Opening the cypress
```sh
npx cypress ope
```
