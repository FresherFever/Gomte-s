// Example: Simple alert when user clicks "Shop Now" on Home Page
document.addEventListener('DOMContentLoaded', () => {
    const shopNowButton = document.querySelector('.btn');
    if (shopNowButton) {
      shopNowButton.addEventListener('click', () => {
        alert('Welcome to our store!');
      });
    }
  });
  