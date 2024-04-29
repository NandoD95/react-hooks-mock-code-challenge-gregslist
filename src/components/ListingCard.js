import React, {useState} from "react";

function ListingCard({item, handleDelete}) {
  const [favorite, setFavorite] = useState(false);
  // destructing item object 
  const {id, description, image, location} = item

  function handleClick(){
    setFavorite(!favorite);
    // setFavorite((currentFavoritedState) => !currentFavoritedState) // other way to code the line above
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={item.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick= {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={() => handleDelete(item.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
