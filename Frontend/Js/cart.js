async function addToCart(name, price) {
    const product = { name, price };

    try {
        const response = await fetch('http://localhost:5000/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        const data = await response.json();
        console.log(data);
        alert('Product added to cart!');
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}
