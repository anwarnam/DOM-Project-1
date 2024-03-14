document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    
    function decreaseQuantity(quantityElement) {
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
            quantityElement.textContent = currentQuantity - 1;
            updateTotalPrice();
        }
    }

    
    function increaseQuantity(quantityElement) {
        let currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
        updateTotalPrice();
    }

    
    function deleteItem(itemElement) {
        itemElement.remove();
        updateTotalPrice();
    }

    
    function likeItem(likeButton) {
        likeButton.classList.toggle('liked');
    }

    
    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(function(item) {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            total += quantity * price;
        });
        totalPriceElement.textContent = '$' + total.toFixed(2);
    }

    
    cartItems.forEach(function(item) {
        const decreaseBtn = item.querySelector('.decrease');
        const increaseBtn = item.querySelector('.increase');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-btn');

        decreaseBtn.addEventListener('click', function() {
            decreaseQuantity(item.querySelector('.quantity'));
        });

        increaseBtn.addEventListener('click', function() {
            increaseQuantity(item.querySelector('.quantity'));
        });

        deleteBtn.addEventListener('click', function() {
            deleteItem(item);
        });

        likeBtn.addEventListener('click', function() {
            likeItem(likeBtn);
        });
    });

    
    updateTotalPrice();
});
