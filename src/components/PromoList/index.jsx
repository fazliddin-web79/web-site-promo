import React from "react";
import PromoCard from "../PromoCard";

const PromoList = ({ promos }) => {
  return (
    <div className="row">
      {promos.map((promo) => (
        <PromoCard key={promo.id} promo={promo} />
      ))}
    </div>
  );
};

export default PromoList;
