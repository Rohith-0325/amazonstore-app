import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {

    const [quantity, setQuantity] = useState(0);
    const [selectedColor, setSelectedColor] = useState("Black");
    const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
    const [showProduct, setShowProduct] = useState(true);

    useEffect(() => {
        document.title = "Amazon Product Store";
    }, []);

    const addToCart = () => {
        setQuantity(quantity + 1);
    };

    const removeOne = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const resetCart = () => {
        setQuantity(0);
    };

    return (
        <div>

            <Header />

            <div className="container">

                <button
                    onClick={() => setShowProduct(!showProduct)}
                >
                    {showProduct ? "Hide Product" : "Show Product"}
                </button>

                {showProduct && (
                    <ProductCard
                        name="Wireless Mouse"
                        price={499}
                        quantity={quantity}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        deliveryCity={deliveryCity}
                        setDeliveryCity={setDeliveryCity}
                        addToCart={addToCart}
                        removeOne={removeOne}
                        resetCart={resetCart}
                    />
                )}

            </div>

            <Footer />

        </div>
    );
}

export default App;