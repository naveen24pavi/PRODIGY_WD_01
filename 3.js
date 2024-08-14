document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.purchase-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const shoeModel = this.parentElement;
            const price = shoeModel.getAttribute('data-price');
            const shoeName = shoeModel.querySelector('h3').textContent;

            // Basic transaction popup
            alert(`You have selected ${shoeName} for $${price}. Thank you for your purchase!`);
            
            // You can add real payment processing here or redirect to a checkout page
        });
    });
});
