import React from "react";
import styles from "./style.module.scss";
import Product1 from "../../assets/Products/Product-1.svg";
import Product2 from "../../assets/Products/Product-2.svg";
import Product3 from "../../assets/Products/Product-3.svg";
import Product4 from "../../assets/Products/Product-4.svg";
import Cart from "../../assets/Products/cart.svg";
const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={`${styles["bestsellers"]} ${styles["active"]}`}>
            Ən çox satılan
          </button>
          <button className={styles["discounts"]}>Endirimlər</button>
        </div>
        <div className={styles.main}>
          <div className={`${styles.product} ${styles["product-1"]}`}>
            <div className={styles["product-wrapper"]}>
              <div className={styles["product-image"]}>
                <img src={Product1} alt="" />
              </div>
              <div className={styles.opportunities}>
                <p className={styles.bestseller}>Çox satılan</p>
                <p className={styles["free-cargo"]}>Pulsuz çatdırılma</p>
              </div>
            </div>
            <div className={styles["product-details"]}>
              <h5 className={styles.brand}>Bioderma</h5>
              <h3 className={styles.name}>Sensibio Micellar water, 1 l</h3>
              <span className={styles.price}>14.00 AZN</span>
              <button className={styles.basket}>
                <span>Səbətə at</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M16.8333 11.4167V7.08333C16.8333 4.6901 14.8932 2.75 12.5 2.75C10.1067 2.75 8.16665 4.6901 8.16665 7.08333V11.4167M4.91665 9.25H20.0833L21.1666 22.25H3.83331L4.91665 9.25Z"
                    stroke="#009BC7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${styles.product} ${styles["product-2"]}`}>
            <div className={styles["product-wrapper"]}>
              <div className={styles["product-image"]}>
                <img src={Product2} alt="" />
              </div>
              <div className={styles.opportunities}>
                <p className={styles.bestseller}>Çox satılan</p>
              </div>
            </div>
            <div className={styles["product-details"]}>
              <h5 className={styles.brand}>Bioderma</h5>
              <h3 className={styles.name}>Sensibio Micellar water, 1 l</h3>
              <span className={styles.price}>14.00 AZN</span>
              <button className={styles.basket}>
                <span>Səbətə at</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M16.8333 11.4167V7.08333C16.8333 4.6901 14.8932 2.75 12.5 2.75C10.1067 2.75 8.16665 4.6901 8.16665 7.08333V11.4167M4.91665 9.25H20.0833L21.1666 22.25H3.83331L4.91665 9.25Z"
                    stroke="#009BC7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${styles.product} ${styles["product-3"]}`}>
            <div className={styles["product-wrapper"]}>
              <div className={styles["product-image"]}>
                <img src={Product3} alt="" />
              </div>
              <div className={styles.opportunities}>
                <p className={styles.bestseller}>Çox satılan</p>
                <p className={styles["free-cargo"]}>Pulsuz çatdırılma</p>
              </div>
            </div>
            <div className={styles["product-details"]}>
              <h5 className={styles.brand}>Bioderma</h5>
              <h3 className={styles.name}>Sensibio Micellar water, 1 l</h3>
              <span className={styles.price}>14.00 AZN</span>
              <button className={styles.basket}>
                <span>Səbətə at</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M16.8333 11.4167V7.08333C16.8333 4.6901 14.8932 2.75 12.5 2.75C10.1067 2.75 8.16665 4.6901 8.16665 7.08333V11.4167M4.91665 9.25H20.0833L21.1666 22.25H3.83331L4.91665 9.25Z"
                    stroke="#009BC7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${styles.product} ${styles["product-4"]}`}>
            <div className={styles["product-wrapper"]}>
              <div className={styles["product-image"]}>
                <img src={Product4} alt="" />
              </div>
              <div className={styles.opportunities}>
                <p className={styles.bestseller}>Çox satılan</p>
              </div>
            </div>
            <div className={styles["product-details"]}>
              <h5 className={styles.brand}>Bioderma</h5>
              <h3 className={styles.name}>Sensibio Micellar water, 1 l</h3>
              <span className={styles.price}>14.00 AZN</span>
              <button className={styles.basket}>
                <span>Səbətə at</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M16.8333 11.4167V7.08333C16.8333 4.6901 14.8932 2.75 12.5 2.75C10.1067 2.75 8.16665 4.6901 8.16665 7.08333V11.4167M4.91665 9.25H20.0833L21.1666 22.25H3.83331L4.91665 9.25Z"
                    stroke="#009BC7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
