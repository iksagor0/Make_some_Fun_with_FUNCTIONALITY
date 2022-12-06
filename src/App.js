import { useEffect, useReducer, useState } from "react";
import "./App.css";

const intialState = {
  products: [],
  cart: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.playload };

    case "ADD_TO_CART":
      return { ...state, cart: [action.playload, ...state.cart] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.playload.id),
      };

    case "CHANGE_QUATITY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.playload.id ? (c.qnty = action.playload.qnty) : c.qnty
        ),
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(productReducer, intialState);
  const [totalPrice, setTotalPrice] = useState(0);

  //  FETCHING FAKE PRODUCTS
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "FETCH_PRODUCTS", playload: json }));
  }, []);

  const addToCart = (e, pro) => {
    dispatch({
      type: "ADD_TO_CART",
      playload: {
        id: pro.id,
        title: pro.title,
        image: pro.image,
        price: pro.price,
        qnty: 1,
      },
    });
  };

  const removeFromCart = (e, pro) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      playload: {
        id: pro.id,
      },
    });
  };

  const changeQnty = (id, qnty) => {
    dispatch({
      type: "CHANGE_QUATITY",
      playload: {
        id,
        qnty,
      },
    });
  };

  useEffect(() => {
    setTotalPrice(
      state.cart
        .reduce((acc, cPro) => acc + Number(cPro.price) * cPro.qnty, 0)
        .toFixed(2)
    );
  }, [state]);

  // let total = state?.cart?.reducer((acc, cPro) => acc + cPro.price, 0);

  return (
    <div className="App">
      <div className="container">
        <div className="productsList">
          {state.products.map((pro, index) => (
            <div className="product" key={index}>
              <img src={pro.image} alt={pro.title} />
              <h4>{pro.title}</h4>

              <div className="procuctFooter">
                <p>{pro.price} $</p>
                {state.cart.some((p) => p.id === pro.id) ? (
                  <button
                    className="removeCartBtn"
                    onClick={(e) => removeFromCart(e, pro)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="addCartBtn"
                    onClick={(e) => addToCart(e, pro)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <p className="total_price">
            Total Price : <h3>{totalPrice} $</h3>
          </p>

          <div className="cart_container">
            {state.cart.map((pro, index) => (
              <div className="cartProduct" key={index}>
                <div className="pro_details">
                  <img src={pro.image} alt={pro.title} />
                  <h4>{pro.title}</h4>
                  <p className="price">{pro.price} $</p>
                </div>
                <div className="quatity_container">
                  <button onClick={() => changeQnty(pro.id, pro.qnty - 1)}>
                    -
                  </button>
                  <p>{pro.qnty}</p>
                  <button onClick={() => changeQnty(pro.id, pro.qnty + 1)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
