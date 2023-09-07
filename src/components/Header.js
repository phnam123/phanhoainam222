import React from "react";

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        width: "100%",
        height: "100px",
      }}
    >
      <div style={{ width: "77%"}}>
        <div style={{ display: "flex", flexDirection: "row", height: "50%" }}>
          <div
            style={{
              display: "flex",
              marginLeft: "20px",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "12%",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              cycling sport
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "88%",
            }}
          >
            <div
              style={{
                marginRight: "20px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              VND
            </div>
              <div style={{ marginRight: "40px" }}>
                <img
                  style={{ width: "50px" }}
                  src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-circular-world-flag-vietnam-icon-png-image_4830539.png"
                ></img>
              </div>
              
            <div style={{ color: "white", fontSize: "15px" }}>
              đăng ký ngay để nhận voucher 150k 
            </div>
            <button
              type="submit"
              style={{
                height: "30px",
                margin: "10px",
              }}
            >
              đăng ký
            </button>
            <button
              type="submit"
              style={{
                height: "30px",
                marginRight: "20px",
              }}
            >
              đăng nhập
            </button>
            <br />
          </div>
        </div>

        <div style={{ height: "50%" }}></div>
      </div>
    </div>
  );
};