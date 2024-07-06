import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const PromoCard = ({ promo }) => {
  const images = [
    "https://via.placeholder.com/400x200.png?text=Promo+Image+1",
    "https://via.placeholder.com/400x200.png?text=Promo+Image+2",
  ];

  return (
    <div className="col-sm-4 col-12  mb-4 p-0 ">
      <div className="card m-2">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block" src={image} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="card-body">
          <h5 className="card-title">{promo.title}</h5>
          <p className="card-text">{promo.description}</p>
          <Link to={`/promos/${promo.id}`} className="btn btn-primary">
            Batafsil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
