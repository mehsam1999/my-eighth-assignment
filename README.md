# Project Name

Gadget Heaven

## Requirement Document Link  

```bash
  https://drive.google.com/file/d/1z-UAy7_5RwZx78zzacaKFnQ_IymZ_m7O/view?usp=sharing
```

## Live Website Link 

```bash
  https://gadget-heaven-ltd.surge.sh
```

# List of React Fundamental concepts used in this project 

- **Components:** Reusable component structures like MainLayout, Home, Banner, Categories, and Gadget organize the UI.

- **Props:** Props are passed to child components, such as Navbar, Banner, Categories, and other components, to allow data sharing across the component tree.

- **State Management:** The useState hook is widely used to manage component states for cartCount, wishlistCount, totalCost, and other dynamic values.

- **Effects:** The useEffect hook handles side effects, like setting and getting data from localStorage for cart and wishlist counts.

- **Context API:** The useOutletContext hook shares context data (e.g., cart and wishlist states) between nested components, enhancing state management across the app.

- **Router (React Router):** Utilizes RouterProvider, createBrowserRouter, and route configuration to manage multi-page navigation with paths like /, /statistics, /dashboard, and dynamic routes for product details.

- **Conditional Rendering:** Conditionally displays components like Navbar and Footer based on routes and application states (e.g., checking isHomePage).

- **Local Storage:** Stores and retrieves user data (e.g., cartCount, wishlistCount, cart items) to maintain state across sessions, enhancing user experience by persisting cart and wishlist items even after page reloads or reopening the browser.

- **Form Handling:** react-hook-form manages form validation in OnlineSupport, with fields like Full Name, Phone Number, Email, Invoice no., Details and Subject.

- **React Helmet:** Manages meta tags and page titles dynamically for components like Home, Statistics,  Dashboard and Online Support .

# What I have used for handling and managing data

- **Context API:** The Context API is employed to share state and functions across multiple components, especially for commonly accessed data like cartCount, wishlistCount, and functions like incrementCart and incrementWishlist. The useOutletContext hook is utilized to share context data with nested components, allowing child components to access and manipulate shared state without prop drilling. This makes managing and updating global states more efficient and maintains clean component structures.

- **Local Storage:** Local storage is used to persist data such as cartCount, wishlistCount, and the actual items in the cart and wishlist. Functions like getCartCount and getWishlistCount retrieve initial values from local storage, ensuring data consistency across browser sessions. Updates to local storage are synchronized with state changes using useEffect, ensuring that any changes in the cart or wishlist states are reflected in local storage. This way, users retain their cart and wishlist data even if they refresh the page or close the browser.

# 5 features of this project

- **Dynamic Shopping Cart and Wishlist:** Users can add items to a shopping cart and wishlist. The cart and wishlist counts are displayed in the Navbar, and items are persisted in local storage, allowing users to continue where they left off even after closing or refreshing the page.

- **Product Filtering and Categories:** Users can browse products by categories such as "Phones," "Laptops," "Accessories," etc., helping them quickly find items of interest. The dynamic routing enables category-based filtering, and products display relevant information like price, description, and ratings.

- **Interactive Dashboard:** The Dashboard page provides users with a central area to view items in their cart and wishlist. It includes features to sort items by price, remove items, and clear the cart. A total cost calculator updates dynamically as items are added or removed, enhancing shopping management.

- **Responsive Design with Dynamic Page Titles:** Using React Helmet, each page has a dynamic title and metadata, enhancing the user experience and SEO. The layout adapts to different screen sizes, ensuring accessibility and usability on both mobile and desktop devices.

- **Online Support Form:** The Online Support page includes a contact form for customer support requests. Built with react-hook-form, it provides validation and user-friendly error messages, ensuring that users enter correct and complete information before submitting their support requests.