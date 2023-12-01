# E-Commerce Site

## About

This application is an E-Commerce site built with React.JS and vanilla CSS for the front end, and Firebase for the back end. By utilizing React-router-dom, you can navigate the site without having to reload the page.
The web site has a nav bar, shopping cart, landing page, categories page, product page and a footer.

### Dependencies

- React.JS 18.2.0
- React-router-dom 6.19.0
- Firebase 10.6.0

## Pages and components

### Landing page

The landing page is composed of:

- The header component that shows 4 categories of products, clicking one of them redirects to the pertinent category page.
- The separator components that shows an image, a promotional text and a button that, when clicked redirects to the pertinent category. There are 2 separators, one immediately after the header and one after the product carousel.
- The product carousel component displays 10 products. Clicking one of the product elements redirects to the appropriate product page.

![](https://firebasestorage.googleapis.com/v0/b/e-commerce-fcdf9.appspot.com/o/ProjectImages%2FE-CommerceSite.png?alt=media&token=41089743-666f-4ead-91b5-095b48ed51ea)

### Categories page

The categories page can show the products in 6 groups, all, furniture, kitchen, lamps, electronics and peripherals. Each time it changes category it makes a request to the firestore database, fetching the items of the appropriate category.
Also the page has a pagination function that shows up to 8 products, those products will be display in the "page 1" and the leftover products will be displayed in the "page 2", and so on.
![](https://firebasestorage.googleapis.com/v0/b/e-commerce-fcdf9.appspot.com/o/ProjectImages%2FCategoriesFull.png?alt=media&token=b4f2a11e-6916-4ec8-b71a-ca026b445766)

### Product page

The product pages receives a product id from the url, then the data is fetched form the firestore database. You can cycle through the product images and see the product details below the images. At the right side of the porduct image is the quantity selector, this part is connected with the shopping cart, letting you control how many items you want to add to the cart.
![](https://firebasestorage.googleapis.com/v0/b/e-commerce-fcdf9.appspot.com/o/ProjectImages%2FProductFull2.png?alt=media&token=c3c46f06-75b0-4e0b-abdf-45bae6d80d6b)

### Cart

The shopping cart component lets you add any available product, giving you a subtotal value of all of the added products. You can add or subtract the quantity of the carted product, and delete the product from the cart.
![](https://firebasestorage.googleapis.com/v0/b/e-commerce-fcdf9.appspot.com/o/ProjectImages%2FCart.PNG?alt=media&token=84ce7de0-b429-4d25-9e52-4dc2f440e397)

## Demo deployment

Clone and install.

```bash
git clone https://github.com/Joable/crypto-search.git
cd crypto-search
npm i
```

Run a development server.

```bash
npm run dev
```

## Build deployment

Clone and install.

```bash
git clone https://github.com/Joable/crypto-search.git
cd crypto-search
npm i
```

Run a development server.

```bash
npm run build
```
