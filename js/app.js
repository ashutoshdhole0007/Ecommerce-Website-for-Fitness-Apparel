// ============================================================
// AlphaFit Static Site - Core Application Logic
// ============================================================

// ---- Auth helpers ----
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('alphafit_user'));
}

function setCurrentUser(user) {
    if (user) {
        localStorage.setItem('alphafit_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('alphafit_user');
    }
}

// ---- Cart helpers ----
function getCart() {
    return JSON.parse(localStorage.getItem('alphafit_cart') || '{}');
}

function setCart(cart) {
    localStorage.setItem('alphafit_cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const cart = getCart();
    const key = String(productId);
    cart[key] = (cart[key] || 0) + 1;
    setCart(cart);
}

function removeFromCart(productId) {
    const cart = getCart();
    delete cart[String(productId)];
    setCart(cart);
}

function getCartItems(products) {
    const cart = getCart();
    const items = [];
    let total = 0;
    for (const product of products) {
        const qty = cart[product.id] || 0;
        if (qty > 0) {
            const subtotal = parseFloat(product.price) * qty;
            total += subtotal;
            items.push({ product, quantity: qty, subtotal });
        }
    }
    return { items, total };
}

// ---- Navigation ----
function updateNav() {
    const user = getCurrentUser();
    const navLinks = document.querySelectorAll('.nav-auth');
    navLinks.forEach(el => {
        if (user) {
            el.innerHTML = `
                <li class="nav-item"><a class="nav-link" href="cart.html">Cart</a></li>
                <li class="nav-item">
                    <form method="post" action="#" onsubmit="event.preventDefault(); logout();">
                        <button class="nav-link btn btn-link px-0" type="submit">Logout</button>
                    </form>
                </li>
            `;
        } else {
            el.innerHTML = `
                <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                <li class="nav-item"><a class="btn btn-alpha" href="register.html">Register</a></li>
            `;
        }
    });
}

function logout() {
    setCurrentUser(null);
    window.location.href = 'index.html';
}

// ---- Toast messages ----
function showMessage(text, type = 'success') {
    const container = document.createElement('div');
    container.className = 'container mt-3';
    container.innerHTML = `<div class="alert alert-dark border border-secondary text-light">${text}</div>`;
    const main = document.querySelector('main');
    if (main) {
        main.prepend(container);
        setTimeout(() => container.remove(), 3000);
    }
}

// ---- Product card HTML ----
function productCard(product) {
    return `
        <div class="col-sm-6 col-lg-4">
            <article class="product-card h-100">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image_url}" alt="${product.name}" onerror="this.onerror=null;this.src='images/product-placeholder.svg';">
                </a>
                <div class="p-3 d-flex flex-column gap-2">
                    <span class="category">${product.category}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description.substring(0, 40)}...</p>
                    <div class="d-flex align-items-center justify-content-between mt-auto">
                        <strong>Rs. ${product.price}</strong>
                        <a class="btn btn-sm btn-outline-light" href="product.html?id=${product.id}">View</a>
                    </div>
                </div>
            </article>
        </div>
    `;
}

// ---- Render products grid ----
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = products.map(productCard).join('');
}

// ---- Auth forms ----
function setupAuthForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value;
            const users = JSON.parse(localStorage.getItem('alphafit_users') || '[]');
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                setCurrentUser({ username: user.username, email: user.email });
                const returnUrl = localStorage.getItem('alphafit_return_url') || 'index.html';
                localStorage.removeItem('alphafit_return_url');
                window.location.href = returnUrl;
            } else {
                showMessage('Invalid credentials. Please try again.', 'danger');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('reg-username').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const password = document.getElementById('reg-password').value;
            const password2 = document.getElementById('reg-password2').value;

            if (password !== password2) {
                showMessage('Passwords do not match.', 'danger');
                return;
            }

            const users = JSON.parse(localStorage.getItem('alphafit_users') || '[]');
            if (users.find(u => u.username === username)) {
                showMessage('Username already exists.', 'danger');
                return;
            }

            users.push({ username, email, password });
            localStorage.setItem('alphafit_users', JSON.stringify(users));
            setCurrentUser({ username, email });
            showMessage('Welcome to AlphaFit. Your account is ready.');
            window.location.href = 'index.html';
        });
    }
}

// ---- Initialize on DOM ready ----
document.addEventListener('DOMContentLoaded', function() {
    updateNav();
    setupAuthForms();
});
