import Pala from "./components/Pala.jsx";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { db } from "./data/db.js";
import Footer from "./components/Footer.jsx";

function App() {
  const initialCart = () => JSON.parse(localStorage.getItem("cart")) || [];
  const [data, setData] = useState(db);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(pala) {
    setCart((prevCart) => {
      const itemExist = prevCart.find((item) => item.id === pala.id);
      if (itemExist) {
        return prevCart.map((item) =>
          item.id === pala.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pala, quantity: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter((pala) => pala.id !== id);
    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    setCart((prevCart) => {
      const itemExist = prevCart.find((pala) => pala.id === id);
      if (itemExist) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return prevCart;
      }
    });
  }

  function decreaseQuantity(id) {
    const itemExist = cart.findIndex((pala) => pala.id === id);
    const updatedCart = [...cart];
    if (updatedCart[itemExist].quantity > 1) {
      updatedCart[itemExist].quantity--;
    } else {
      updatedCart.splice(itemExist, 1);
    }
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((pala) => {
            return (
              <Pala
                pala={pala}
                key={pala.id}
                cart={cart}
                setCarts={setCart}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
