import React from "react";
import Hero from "../../assets/images/hero.jpg";
import Hero2 from "../../assets/images/bethany.jpg";
import "../home/homes.css";
import hero3 from "../../assets/images/pieoftheweek.jpg";
import pdf from "../../assets/Pdf/Pricelist/Pricelist.pdf";

function Home() {
  return (
    <>
      <div className="container">
        <h1>Welcome To Bethany's Pie Shop</h1>
        <img className="hero-img" src={Hero} alt="Hero" />
        <h2>Our History</h2>
        <p>
          Welcome to Bethany's Pie Shop, where pie-baking perfection meets
          convenience! For countless years, Bethany's passion for crafting the
          most scrumptious pies has been an unmatched delight. Our journey began
          in 2013 when we unveiled our first charming store in the heart of
          Brussels (Belgium), nestled in a cozy little street near the
          illustrious Grand Market. It was here that our pies first captured the
          hearts and taste buds of people from every corner of the globe, from
          delectable soft cakes to heavenly cheesecakes and tantalizingly spiced
          apple pies. Our store's extraordinary success was nothing short of a
          culinary fairy tale.
        </p>
        <img className="hero-img" src={Hero2} alt="" />
        <p>
          As the demand for Bethany's divine creations soared, an incredible
          milestone was reached in 2015, when we proudly sold an astonishing 100
          pies each day! Naturally, our beloved Pie Shop had to evolve, and we
          relocated to a grander, more spacious building to better serve our
          cherished patrons. The love and support we received from our
          ever-growing community inspired us to explore new possibilities.
        </p>
        <br />
        <p>
          In response to numerous heartfelt requests from pie enthusiasts far
          and wide, we knew the time had come to bring our mouthwatering treats
          to your doorstep. Thus, in 2023, the idea of our very own webstore was
          born: a virtual haven where you can now relish the delight of ordering
          Bethany's scrumptious pies from the comfort of your own home, no
          matter where you reside in the world.
        </p>
        <br />
        <p>
          What sets us apart, you ask? At Bethany's Pie Shop, we believe in
          using only the finest, handpicked ingredients to create each and every
          masterpiece. We meticulously source the freshest fruits, creamiest
          cheeses, and most aromatic spices to ensure that every bite of our pie
          is an unrivaled, tantalizing experience.
        </p>
        <br />
        <div className="pdf-box">
          <div>
            <p>Download our Full List </p>
          </div>
          <div>
            <a href={pdf} download="../../assets/Pdf/Pricelist/Pricelist.pdf">
              Price List
            </a>
          </div>
        </div>
        <hr className="hori_line" />
        <br />
        <h3>OUT WEEKLY PROMOTIONS</h3>
        <h5>Pecan Pie</h5>
        <img className="hero-img" src={hero3} alt="" />
      </div>
    </>
  );
}

export default Home;
