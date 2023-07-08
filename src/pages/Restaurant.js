import React, { useContext, useState } from "react";
import { BsArrowLeft, BsStarFill, BsXLg } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

const Restaurant = () => {
  const { restroName } = useParams();
  const [showReviewModal, setReviewModal] = useState(false);
  const { restaurantsDatas, review } = useContext(DataContext);

  const { name, address, averageRating, menu, ratings, id } =
    restaurantsDatas.find(({ name }) => name === restroName);

  const handleSubmit = (event) => {
    event.preventDefault();
    review(id, event.target[0].value, event.target[1].value);
  };

  return (
    <div className="restro-contianer">
      {showReviewModal && (
        <div className="modal">
          <button
            className="btn-icon-alt modal-close"
            onClick={() => setReviewModal(false)}
          >
            <BsXLg size={"1.5rem"} />
          </button>
          <h2> Add Your Review</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Rating:
              <select name="rating" required>
                <option value={""} selected>
                  Select Rating
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </label>
            <label>
              Comment:
              <textarea placeholder="your comment here" required />
            </label>

            <button className="button-alt">Submit</button>
          </form>
        </div>
      )}
      <div className="restro-details">
        <button className="btn-review" onClick={() => setReviewModal(true)}>
          Add Review
        </button>
        <Link to={"/"} className="tl">
          <BsArrowLeft size={"2.5rem"} />
        </Link>
        <h1 className="name">{name}</h1>
        <p>
          {menu.map(({ name }, index) =>
            index !== menu.length - 1 ? `${name}, ` : name
          )}
        </p>
        <p>{address}</p>
        <p className="last-deatail">Average Rating: {averageRating}</p>
      </div>
      <div className="reviews-list">
        <h2>Reviews</h2>
        {ratings.map(({ rating, comment, revName, pp, id }) => (
          <div key={comment} className="review">
            <img className="thumbnail" src={pp} alt="pp" /> <b>{revName}</b>
            <p className="dark">{comment}</p>
            <span className="rating-tr">
              {rating} <BsStarFill size={"1.5rem"} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
