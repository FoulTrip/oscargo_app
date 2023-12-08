import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import modelCargoMini from "@/assets/modelo_mini_cargo.webp";

function MiniCargo() {
  return (
    <>
      <div className={styles.boxCards}>
        <h1 className={styles.nameService}>Cargo mini</h1>
        <div className={styles.card}>
          <div className={styles.subCard}>
            <div className={styles.boxImage}>
              <Image
                className={styles.bicImage}
                src={modelCargoMini}
                alt="mini"
              />
            </div>
            <p className={styles.nameroduct}>Cargo Mini v1</p>
            <p className={styles.priceProduct}>Precio: $4'000.000</p>
          </div>

          <div className={styles.subCard}>
            <div className={styles.boxImage}>
              <Image
                className={styles.bicImage}
                src={modelCargoMini}
                alt="mini"
              />
            </div>
            <p className={styles.nameroduct}>Cargo Mini v1</p>
            <p className={styles.priceProduct}>Precio: $4'000.000</p>
          </div>

          <div className={styles.subCard}>
            <div className={styles.boxImage}>
              <Image
                className={styles.bicImage}
                src={modelCargoMini}
                alt="mini"
              />
            </div>
            <p className={styles.nameroduct}>Cargo Mini v1</p>
            <p className={styles.priceProduct}>Precio: $4'000.000</p>
          </div>

          <div className={styles.subCard}>
            <div className={styles.boxImage}>
              <Image
                className={styles.bicImage}
                src={modelCargoMini}
                alt="mini"
              />
            </div>
            <p className={styles.nameroduct}>Cargo Mini v1</p>
            <p className={styles.priceProduct}>Precio: $4'000.000</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default MiniCargo;
