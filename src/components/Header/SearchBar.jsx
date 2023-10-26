import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { kebabCase } from "lodash";
import axios from "axios";
import { ShopContext } from "../../Context/ShopContext";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const { isProductPage, setIsProductPage } = useContext(ShopContext);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;

      const filterData = data.filter((products) =>
        products.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      setSearchResults(filterData);
    }
    fetchData();
  }, [searchValue]);

  function checkIf(e) {
    setSearchValue(e.target.value);
    setIsProductPage(false);
  }

  return (
    <>
      <div className="search__box">
        <select name="category" id="category">
          <option value="default">All</option>
          <option value="0">All Department</option>
          <option value="1">Arts & Crafts</option>
          <option value="2">Automation</option>
          <option value="3">Baby</option>
          <option value="4">Beauty & Personal Care</option>
          <option value="5">Books</option>
        </select>
        <input
          type="text"
          placeholder="Search products"
          value={searchValue}
          onChange={checkIf}
        />
        <button>
          <i className="uil uil-search"></i>
        </button>
      </div>
      {isProductPage ? null : (
        <div
          className="search__Results"
          style={{ display: searchValue ? "block" : "none" }}
        >
          <ul>
            {searchValue
              ? searchResults.map((product) => (
                  <Link to={"/product/" + kebabCase(product.title)}>
                    <li key={product.id}>{product.title}</li>
                  </Link>
                ))
              : null}
          </ul>
        </div>
      )}
    </>
  );
}

export default SearchBar;
