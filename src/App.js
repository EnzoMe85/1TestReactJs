
//import Componente1 from "./Componente1";
import React from "react";
import Prodotto from "./Product";



function App() {
  return (
    <div>
      <h2 className="testo">LA NOSTRA PRIMA CARD ADIDAS</h2>
      <div className="contenitore">
          <Prodotto className="articolo" ></Prodotto>
          <Prodotto className="articolo" ></Prodotto>
          <Prodotto className="articolo" ></Prodotto>
          <Prodotto className="articolo" ></Prodotto>
          <Prodotto className="articolo" ></Prodotto>
          <Prodotto className="articolo" ></Prodotto>
          <Prodotto className="articolo" ></Prodotto>
          <Prodotto className="articolo" ></Prodotto>
          
      </div>
      {/* <Componente1></Componente1> */}
    </div>

  );
}

export default App;