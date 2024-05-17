import React from 'react'
import "./BesProducts.scss"
import { data } from '../../Data';
import Image04 from "../../assets/svg/image04.svg"
import Image05 from "../../assets/svg/image05.svg"
import Image06 from "../../assets/svg/image06.svg"
import Image07 from "../../assets/svg/image07.svg"
function BestProducts() {
  return (
    <section>
        <div className="container product-date">
        <div className="date-top">
          <div className="date-block"></div>
          <h5
            style={{
              paddingTop: "8px",
            }}
          >
            Categories
          </h5>
        </div>
        <div className="date-container">
          <div className="date-container-left">
            <h1>Best Selling Products</h1>
          </div>
          <div className="date-container-right">
           <button>View All</button>
          </div>
        </div>
      </div>


      <div className="best-container container">

        <div className="best-blocks">
        {
        data.map((item)=>(
            <div className="product-block">
            <button>{(((item.oldPrice-item.newPrice)/item.newPrice)*100).toFixed(0)}%</button>
            <div className="product-block-position">
                <img src={Image05} alt="" />
            </div>
            <div className="product-block-position-2">
                <img src={Image06} alt="" />
            </div>
            <div className="product-block-image">
                <img src={Image04} alt="" />
                <button>Add To Cart</button>
            </div>
            <div className="product-block-text">
                <h1>{item.title}</h1>
                <div className="product-block-text-flex">
                    <p>${item.newPrice}</p>
                    <p style={{
                        color:"#000000",
                        opacity:"0.5"
                    
                    }}>${item.oldPrice}</p>
                </div>
                <div style={{
                    display:"flex",
                    gap:"8px",
                }} className="product-block-text-flex">
                    <img src={Image07} alt="" />
                    
                    <p style={{
                        color:"#000000",
                        opacity:"0.5"
                    
                    }}>(${item.ratign})</p>
                </div>

            </div>
          </div>
        ))
       }
        </div>
      </div>

      
    </section>
  )
}

export default BestProducts
