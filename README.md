# Project: Shopping Cart with TypeScript ([assignment link](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart))

## Technology Stack & Setup

### Built with:
- **Frontend**: React (Vite) with React Router, Context API for state management, and Tailwind CSS for styling.  
- **Backend (Mocked)**: Uses [Fake Store API](https://fakestoreapi.com/) for product and cart data.  
- **Data Fetching**: Fetch API for asynchronous requests.  

## Component Structure:

- **Global Components**  
  - Navbar  
  - Footer  
  - AuthGuard  
  - CartStatus  
  - UserStatus  
- **Home**  
- **Shop**  
  - Products  
    - ProductDetails  
  - ShoppingCart  
    - Order  
    - PaymentSummary  
    - Delivery  
    - AdditionalService  
    - PaymentForm 

### Setup Instructions:
1. Clone the repository:  
   ```sh
   git clone https://github.com/mangorango144/shopping-cart.git
   cd shopping-cart
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the development server:  
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173/` in your browser.
