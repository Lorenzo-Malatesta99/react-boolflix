import React from "react";

const Card = ({ item, }) => {
  const renderStars = (vote) => {
    const fullStars = Math.ceil(vote / 2);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
        {Array.from({ length: emptyStars }, (_, i) => (
          <i key={i} className="far fa-star"></i>
        ))}
      </>
    );
  };

  return (
    <div className="result-item card">
      <img
        src={`https://image.tmdb.org/t/p/w342${item.posterPath}`}
        alt={item.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h3>{item.title}</h3>
        <h4>{item.originalTitle}</h4>
        <p>Lingua: {item.language}</p>
        <p>Voto: {renderStars(item.vote)}</p>
      </div>
    </div>
  );
};

export default Card;
