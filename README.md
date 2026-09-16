# AlphaFit Fitness Apparel Marketplace (Static Site)

This is a static version of the AlphaFit Django-based fitness apparel marketplace, converted to be hosted on **GitHub Pages**.

## Live Demo

[View on GitHub Pages](https://your-username.github.io/alphafit-static-site/)

## Features (identical to the Django version)

- Home page with product listings
- Product detail page
- Session-backed shopping cart (using localStorage)
- User registration, login, and logout (simulated with localStorage)
- Checkout form for shipping details
- Payment step with order confirmation
- Dark-themed responsive UI using Bootstrap 5.3.3

## Tech Stack

- HTML5
- CSS3 (custom dark theme + Bootstrap 5.3.3 CDN)
- Vanilla JavaScript (no frameworks)
- JSON for product data
- localStorage for cart and auth simulation

## Project Structure

```text
alphafit-static-site/
├── index.html              # Home page with product listing
├── product.html            # Product detail page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout / shipping form
├── payment.html            # Payment method selection
├── order-success.html      # Order confirmation page
├── login.html              # Login page
├── register.html           # Registration page
├── products.json           # Product catalog data (18 items)
├── css/
│   └── styles.css          # Custom dark theme styles
├── js/
│   └── app.js              # Core application logic
├── images/
│   └── product-placeholder.svg  # Product placeholder image
└── README.md
```

## How to Run Locally

Since the site uses `fetch()` to load `products.json`, you need a local server:

```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx serve

# Or use any local server
```

Then open `http://localhost:8000` in your browser.

## How to Deploy on GitHub Pages

1. Create a new GitHub repository
2. Push all files to the `main` branch
3. Go to **Settings → Pages**
4. Select source: **Deploy from a branch**, branch: **main**, folder: **/**
5. Save and wait ~2 minutes
6. Your site will be live at `https://your-username.github.io/repo-name/`

## Usage Flow

1. Open the home page
2. Browse the product catalog
3. Open a product detail page for more information
4. Register or log in to add products to the cart
5. Review the cart and remove items if needed
6. Continue to checkout and enter shipping details
7. Choose a payment method
8. View the order success page after payment is confirmed

## Notes

- The cart is stored in the browser's `localStorage`
- User data (registration/login) is simulated using `localStorage`
- This is a **demo** — no real payments are processed
- The original Django project remains intact at `/alphafit_project_archive/`
