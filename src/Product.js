import React from 'react'

const prezzo = '14,00';
const alt = 'valore';
const img = "https://egsiteassets.images.egifter.com/Images/GiftCardFaceplates/External/ADIDAS_fp01.png";

const Product = () => {
    return (
        <article>
            <div>
                <img className='imageCard' src={img} alt={`${alt}`} />
                <h6>10€ Amazon + 20P</h6>
                <hr />
                <p>2,16 €</p>
                <p>bamby000</p>
                <p>RIAPRE PRESTO</p>
                <a href="http://Adidas.com">
                <button className='myButton'>
                    {prezzo} €
                </button>
                </a>
            </div>
        </article >
    )
}

export default Product
