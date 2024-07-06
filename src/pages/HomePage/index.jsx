import React, { useState, useEffect } from "react";
import PromoList from "../../components/PromoList";
import Breadcrumb from "../../components/Breadcrumb";

const HomePage = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchedPromos = [
      {
        id: 1,
        title: "10% off",
        description: "Get 10% off your purchase",
        code: "SAVE10",
        expiryDate: "2024-12-31",
      },
      {
        id: 2,
        title: "Free Shipping",
        description: "Free shipping on orders over $50",
        code: "FREESHIP",
        expiryDate: "2024-12-31",
      },
      {
        id: 2,
        title: "Free Shipping",
        description: "Free shipping on orders over $50",
        code: "FREESHIP",
        expiryDate: "2024-12-31",
      },
      {
        id: 2,
        title: "Free Shipping",
        description: "Free shipping on orders over $50",
        code: "FREESHIP",
        expiryDate: "2024-12-31",
      },
      {
        id: 2,
        title: "Free Shipping",
        description: "Free shipping on orders over $50",
        code: "FREESHIP",
        expiryDate: "2024-12-31",
      },
      {
        id: 2,
        title: "Free Shipping",
        description: "Free shipping on orders over $50",
        code: "FREESHIP",
        expiryDate: "2024-12-31",
      },
    ];
    setPromos(fetchedPromos);
  }, []);

  return (
    <div className="container mt-4">
      <Breadcrumb />
      <h2 className="mb-4">Eng so'nggi promokodlar</h2>
      <PromoList promos={promos} />
    </div>
  );
};

export default HomePage;
