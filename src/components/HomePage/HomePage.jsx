import React from "react";
import Slides from "./Partials/Slides/Slides";
import SingleImageBox from "./Partials/Categories/SingleImageBox";
import Categories from "./Partials/Categories/Categoriebox";
import ProductSlider from "./Partials/ProductsSlider/ProductSlider";
import "./home.css";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Slides />
      <div className="categoriesContainer">
        <Categories
          categoryTitle="Gaming accessories"
          categoryOneImg="http://tiny.cc/uw0cvz"
          categoryOneTitle="Headsets"
          categoryTwoImg="http://tiny.cc/vw0cvz"
          categoryTwoTitle="Keyboards"
          categoryThreeImg="http://tiny.cc/xw0cvz"
          categoryThreeTitle="Computer Mice"
          categoryfourImg="http://tiny.cc/0x0cvz"
          categoryfourTitle="Chairs"
        />
        <SingleImageBox title="Toys Under $30" img="http://tiny.cc/6x0cvz" />
        <SingleImageBox title="Electronics" img="http://tiny.cc/fx0cvz" />
      </div>
      <div className="furtherCategoryContainer">
        <SingleImageBox
          title="Home & Kitchen Under $30"
          img="http://tiny.cc/ix0cvz"
        />
        <SingleImageBox
          title="Health & Personal Care"
          img="http://tiny.cc/lx0cvz"
        />
        <Categories
          categoryTitle="Shop deals in Fashion"
          categoryOneImg="http://tiny.cc/mx0cvz"
          categoryOneTitle="Jeans under $50"
          categoryTwoImg="http://tiny.cc/nx0cvz"
          categoryTwoTitle="Top Under $25"
          categoryThreeImg="http://tiny.cc/ox0cvz"
          categoryThreeTitle="Dresses Under $30"
          categoryfourImg="http://tiny.cc/sx0cvz"
          categoryfourTitle="Shoes Under $50"
        />
      </div>

      <ProductSlider title="Deals" />

      <div className="SimpleCategoryContainer">
        <Categories
          categoryTitle="Shop deals in Fashion"
          categoryOneImg="http://tiny.cc/3u1cvz"
          categoryTwoImg="http://tiny.cc/4u1cvz"
          categoryThreeImg="http://tiny.cc/5u1cvz"
          categoryfourImg="http://tiny.cc/6u1cvz"
        />
        <SingleImageBox
          title="New arrivals in Toys"
          img="http://tiny.cc/1u1cvz"
        />
        <SingleImageBox
          title="For your Fitness Needs"
          img="http://tiny.cc/2u1cvz"
        />
      </div>

    </div>
  );
}

export default HomePage;
