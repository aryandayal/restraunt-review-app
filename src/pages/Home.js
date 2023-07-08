import React, { useContext, useState } from "react";
import { cuisineData } from "../data/data";
import { DataContext } from "../contexts/DataContext";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  const { restaurantsDatas } = useContext(DataContext);
  const [cuisine, setCuisine] = useState(0);

  const filteredRestraunts = restaurantsDatas.filter(
    ({ cuisine_id }) => cuisine_id === cuisine
  );

  return (
    <>
      <h1>Food Ordering App</h1>
      <h2>Select Your Cuisine</h2>
      {cuisineData.map(({ name, id }) => (
        <button onClick={() => setCuisine(id)} key={id}>
          {name}
        </button>
      ))}
      <section className="restaurants-list">
        {filteredRestraunts.map(({ id, name: restroName, menu }) => (
          <div key={id}>
            <Link to={"/restaurant/" + restroName}>
              <h2 className="restro-name">
                Dishes by {restroName} <BsArrowRight />
              </h2>
            </Link>
            <section className="menu-list">
              {menu.map(({ name, imgSrc, price, qty }) => (
                <Link to={"/restaurant/" + restroName} key={name}>
                  <article className="dish-card">
                    <img src={imgSrc} alt="dish img"></img>
                    <div className="dish-details">
                      <h4>{name}</h4>
                      <p>
                        Rs.{price} for {qty}
                      </p>
                      <p>{restroName}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </section>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
