function ProductCard({
    name,
    price,
    quantity,
    selectedColor,
    setSelectedColor,
    deliveryCity,
    setDeliveryCity,
    addToCart,
    removeOne,
    resetCart
}) {
    const total = quantity * price;

    return (
        <div className="product-card">

            <img
            src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=600"
            alt="Wireless Mouse"
            className="product-image"
            />

            <h2>{name}</h2>
            <h3>Price: ₹{price}</h3>

            <label>Select Colour:</label>

            <select
                value={selectedColor}
                onChange={(e) =>
                    setSelectedColor(e.target.value)
                }
            >
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
            </select>

            <p>Selected Colour: {selectedColor}</p>

            <label>Delivery City:</label>

            <input
                type="text"
                value={deliveryCity}
                onChange={(e) =>
                    setDeliveryCity(e.target.value)
                }
            />

            <h3>Quantity: {quantity}</h3>

            <button onClick={addToCart}>
                Add to Cart
            </button>

            <button
                onClick={removeOne}
                disabled={quantity === 0}
            >
                Remove One
            </button>

            <button onClick={resetCart}>
                Reset Cart
            </button>

            <hr />

            <h2>Total: ₹{total}</h2>

            {quantity === 0 ? (
                <p className="empty">Cart is empty</p>
            ) : (
                <p className="success">
                    Product added to cart
                </p>
            )}

        </div>
    );
}

export default ProductCard;