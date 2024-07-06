import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchedCategories = [
      { id: 1, name: "Elektronika" },
      { id: 2, name: "Kiyim-kechak" },
      { id: 3, name: "Ovqatlar" },
    ];
    setCategories(fetchedCategories);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Kategoriyalar</h2>
      <Breadcrumb />
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <Link
                  to={`/categories/${category.id}`}
                  className="btn btn-primary"
                >
                  Ko'rish
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
