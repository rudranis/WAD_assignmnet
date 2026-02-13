// Common JavaScript for all pages

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Cart functionality
    if (typeof updateCartTotal !== 'undefined') {
        updateCartTotal();
    }

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Toast notifications
    window.showToast = function(message, type = 'success') {
        const toastContainer = document.getElementById('toastContainer') || createToastContainer();
        const toast = document.createElement('div');
        toast.className = `toast align-items-center text-white bg-${type} border-0`;
        toast.setAttribute('role', 'alert');
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">${message}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        `;
        toastContainer.appendChild(toast);
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    };

    function createToastContainer() {
        const container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(container);
        return container;
    }
});

// Add to cart function
function addToCart(productName, price, image = null) {
    let cart = JSON.parse(localStorage.getItem('butterPizzaCart')) || [];
    
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1,
            image: image
        });
    }
    
    localStorage.setItem('butterPizzaCart', JSON.stringify(cart));
    
    // Show success message
    if (typeof showToast !== 'undefined') {
        showToast(`${productName} added to cart!`, 'success');
    } else {
        alert(`${productName} added to cart!`);
    }
    
    // Update cart count
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('butterPizzaCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(element => {
        element.textContent = totalItems;
        if (totalItems > 0) {
            element.style.display = 'inline';
        }
    });
}

// Remove from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('butterPizzaCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('butterPizzaCart', JSON.stringify(cart));
    
    // Reload cart page if on cart page
    if (window.location.pathname.includes('cart.html')) {
        location.reload();
    } else {
        updateCartCount();
        showToast('Item removed from cart', 'danger');
    }
}

// Update quantity
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('butterPizzaCart')) || [];
    cart[index].quantity += change;
    
    if (cart[index].quantity < 1) {
        removeFromCart(index);
        return;
    }
    
    localStorage.setItem('butterPizzaCart', JSON.stringify(cart));
    
    if (window.location.pathname.includes('cart.html')) {
        location.reload();
    } else {
        updateCartCount();
    }
}

// Get cart total
function getCartTotal() {
    const cart = JSON.parse(localStorage.getItem('butterPizzaCart')) || [];
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);