import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Подключаем файл стилей

// Функциональный компонент
const ShopItemFunc = ({ item }) => {
  return (
    <div className="shop-item">
      <h1>{item.title}</h1> {/* Название товара в h1 */}
      <h2>{item.brand}</h2> {/* Производитель в h2 */}
      <h3>{item.description}</h3> {/* Краткое описание в h3 */}
      <div className="description">{item.descriptionFull}</div> {/* Полное описание в div.description */}
      <div className="price">
        {item.currency}{item.price.toFixed(2)} {/* Символ валюты перед ценой с двумя знаками после запятой */}
      </div>
    </div>
  );
};

// Классовый компонент
class ShopItemClass extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="shop-item">
        <h1>{item.title}</h1> {/* Название товара в h1 */}
        <h2>{item.brand}</h2> {/* Производитель в h2 */}
        <h3>{item.description}</h3> {/* Краткое описание в h3 */}
        <div className="description">{item.descriptionFull}</div> {/* Полное описание в div.description */}
        <div className="price">
          {item.currency}{item.price.toFixed(2)} {/* Символ валюты перед ценой с двумя знаками после запятой */}
        </div>
      </div>
    );
  }
}

const App = () => {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  };

  return (
    <Router>
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="window">
          <Routes>
            {/* Роут для главной страницы с выбором компонента */}
            <Route
              path="/"
              element={
                <div>
                  <h2>Выберите компонент для отображения</h2>
                  <div className="options">
                    <Link to="/store-func">
                      <button>Функциональный компонент</button>
                    </Link>
                    <Link to="/store-class">
                      <button>Классовый компонент</button>
                    </Link>
                  </div>
                </div>
              }
            />

            {/* Роут для функционального компонента */}
            <Route path="/store-func" element={<ShopItemFunc item={item} />} />

            {/* Роут для классового компонента */}
            <Route path="/store-class" element={<ShopItemClass item={item} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
