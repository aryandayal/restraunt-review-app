import React, { createContext, useState } from "react";
import { restaurantsData } from "../data/data";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [restaurantsDatas, setRestaurantsDatas] = useState(restaurantsData);

  const review = (id, rating, comment) => {
    setRestaurantsDatas(
      restaurantsDatas.map((restaurant) => {
        if (id === restaurant.id) {
          restaurant.ratings.push({
            revName: "Ahsan",
            pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
            rating,
            comment,
          });
          restaurant.averageRating = restaurant.ratings
            .reduce(
              (acc, { rating }) => acc + rating / restaurant.ratings.length,
              0
            )
            .toFixed(2);
          return restaurant;
        } else {
          return restaurant;
        }
      })
    );
  };

  return (
    <DataContext.Provider value={{ restaurantsDatas, review }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
