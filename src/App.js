
//import Componente1 from "./Componente1";
import React from "react";
import Prodotto from "./Product";



function App() {
  return (
    <div>
      <h2 className="testo" id="header">The first Card in ReactJs</h2>
      <div className="contenitore">
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>

        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>
        <div className="articolo">
          <Prodotto></Prodotto>
        </div>

      </div>
    </div>

  );
}

export default App;