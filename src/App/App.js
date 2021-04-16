import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import style from "./App.module.scss";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import {Navbar} from "../components/Navbar/Navbar";
import {Footer} from "../components/Footer/Footer";
import CardList from "../components/CardList/CardList";
import {Preloader} from "../components/Preloader/Preloader";
import CartList from "../components/CartList/CartList";
import FavoritList from "../components/FavoritList/FavoritList";

export default function App() {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cards")) || []);
  const [favorites, setfavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

    const addToCart = (code) => {
        let card = [...cart, code];
        setCart(card);
        localStorage.setItem("cart", JSON.stringify(card));
    };

    const selectFavorite = (isFavorites) => {
        setfavorites(isFavorites);
        localStorage.setItem("favorites", JSON.stringify(isFavorites));
    };

  useEffect(() => {
    fetch("product.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to load");
      })
      .then((product) => setCards(product))
      .catch((e) => setError(e.message));
  }, []);

  const renderContainer = () => {
    if (error) {
      return <div>{error}</div>;
    }
    if (!cards) {
      return <Preloader />;
    }
    if (cards.length === 0) {
      return <div>{"Product list empty!!!"}</div>;
    }
    if (cards) {
      return <CardList
          productList={cards}
          addToCart={addToCart}
          favorites={favorites}
          selectFavorite={selectFavorite}
      />;
    }
    return null;
  };

  return (
      <Router>
        <div className={style.App}>
          <header>
            <Navbar />
          </header>
          <main className={style.main}>
              <Switch>
                  <Route exact path="/">
                      {renderContainer()}
                  </Route>
                  <Route path="/cart">
                      <CartList
                          productList={cards}
                          favorites={favorites}
                      />
                  </Route>
                  <Route path="/favorites">
                      <FavoritList
                          productList={cards}
                          favorites={favorites}
                          addToCart={addToCart}
                          selectFavorite={selectFavorite}
                      />
                  </Route>
              </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
  );
}
