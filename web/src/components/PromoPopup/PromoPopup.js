import React, { useState, useEffect } from "react";
import promoImg from "../../images/promo.png"; // adjust if needed

const PromoPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per SESSION, not once per page
    const hasSeen = sessionStorage.getItem("seenPromoPopup");

    if (!hasSeen) {
      // Delay popup by 5 seconds
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("seenPromoPopup", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={promoImg}
          alt="Promo"
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            borderRadius: "10px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
          }}
        />

        <button
          onClick={() => setShow(false)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PromoPopup;
