import React from "react";
import "./productCard.css";
import StarIcon from "@mui/icons-material/Star";
const ProductCard = () => {
  return (
    <div className="product_main_container">
      <div className="product_container">
        <div className="image_container">
          <img src="https://myntra-store.web.app/assets/productPic.d3f2eb76.png" />
          <div className="product_rating">
            <p>4.4</p>
            <StarIcon style={{ color: "red" }} />
            <p>| 3.1K</p>
          </div>
        </div>
      </div>
      <div className="product_content_container">
        <h4>Dress Berry</h4>
        <p>High Necked</p>
        <p>Cropped Top</p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <p style={{ fontWeight: "500" }}>
            Rs <br /> 624
          </p>
          <p style={{ fontWeight: "400" }}>
            <strike>
              Rs <br /> 1999
            </strike>
          </p>
          <p style={{ color: "red", fontWeight: "500" }}>
            (46% <br /> OFF)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
