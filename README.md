# <img width="50px" src="/public/gh small.png"/> Gadget Heaven

A responsive e-commerce website for gadgets, built with React, featuring dynamic routing, category-based product viewing, wishlist and cart management, and a streamlined purchase process.

## Live Website
[https://sunny-tanuki-6d63c3.netlify.app](https://sunny-tanuki-6d63c3.netlify.app)

## Requirement Document
[https://drive.google.com/file/d/1CFL2vcimWUw_9AHVay-i0cOp0LOwXsBE/view?usp=sharing](https://drive.google.com/file/d/1CFL2vcimWUw_9AHVay-i0cOp0LOwXsBE/view?usp=sharing)

---

## Project Overview

This project is a front-end e-commerce website built using React, offering an engaging user experience with features such as category browsing, detailed product views, wishlist and cart functionality, and a checkout process. The site allows users to add items to a cart and wishlist with specific rules, view item details, manage items within the cart, and complete purchases.

---

## Key Features

1. **Product Category Browsing**: Users can browse products based on specific categories by clicking on category buttons.
2. **Product Details View**: Each product can be viewed in full detail on a separate page, accessible via the "View Details" button.
3. **Add to Cart & Wishlist**: Users can add products to the cart multiple times, while the wishlist allows only one instance of each product, disabling the "Add to Wishlist" button if already added.
4. **Cart Management**: Users can view the total price in the cart, sort items by price, and remove items individually.
5. **Purchase Flow**: A "Purchase" button completes the checkout, showing a success modal, clearing the cart, and redirecting to the homepage.

---

## React Concepts Used

- **React Hooks**: *useNavigate()* for managing component state across the app, *useLocation()* for programmatically navigating to the homepage post-purchase, *useState()* for accessing location details in nested routes, *useEffect()* for managing component state across the app, handling side effects and managing data on component mount and update.
- **Event Handling**: Used triggers such as *onClick={}* for triggering events and better user interaction.
- **Props**: For passing data from one component to another.
- **Conditional Rendering**: Showing specific elements based on set rules.
- **Nested Routing**: Except for reloading the whole site, showing child pages inside pages.

---

## Data Handling & Management

The website uses **local storage** for handling cart and wishlist data, ensuring persistence across sessions. This allows users to continue their shopping experience without losing saved items.

---

## Technologies Used

- **React**: Core framework for building the interface.
- **React Router**: For dynamic, nested routing.
- **ES6**: Modern JavaScript syntax and functionality.
- **TailwindCSS**: Well planned and lower size CSS implementation.
- **DaisyUI**: For integrating efficient and better looking elements.
- **HyperUI**: Faster and free to use Tailwind library.
- **React Toastify**: Amazing notification toasts.

---