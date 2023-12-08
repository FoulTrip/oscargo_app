"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import TypeWriter from "typewriter-effect";
import modelCargo from "@/assets/modelCargo.jpeg";

import { IoIosArrowRoundBack } from "react-icons/io";

import modelLogo from "@/assets/oscargo_logo.png";
import MiniCargo from "@/components/services/miniCargo";
import MedianaCargo from "@/components/services/medianaCargo";
import LongCargo from "@/components/services/longCargo";
import Remolque from "@/components/services/Remolque";

function HomePage() {
  const [selectOpt, setSelectOpt] = useState("");
  return (
    <>
      <main className={styles.heroin_section}>
        <div className={styles.boxItems}>
          <Image className={styles.imgCargo} src={modelCargo} alt="cargo" />
        </div>
        <div className={styles.boxItemsName}>
          <p className={styles.nameCompany}>
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Oscargo")
                  .pauseFor(2500)
                  // .deleteAll()
                  .start();
              }}
            />
          </p>
          <p className={styles.productDescription}>
            ¡Descubre la libertad de viajar y transportar con estilo! En
            Oscargo, te ofrecemos nuestras increíbles bicicletas de carga,
            perfectas para aventuras en la ciudad y escapadas con carga.
            Diseñadas para la comodidad y la funcionalidad, nuestras bicicletas
            te brindarán la versatilidad que necesitas en cada viaje. ¡Haz que
            cada recorrido sea una experiencia única con Oscargo
          </p>
          {/* <div className={styles.btnVisit}>
            <div className={styles.realBtn}>Explorar</div>
          </div> */}
        </div>
      </main>

      <main className={styles.secondMain}>
        <div className={styles.barTitles}>
          <div className={styles.centerItemBar}>
            <div className={styles.boxTexts}>
              <h1 className={styles.titleBartop}>NUESTRA PEDALOGIA</h1>
              <p className={styles.subText}>Hormigas sin fronteras</p>
            </div>
            <div className={styles.boxImageLogo}>
              <Image
                className={styles.iconLogoTest}
                src={modelLogo}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.BoxInfo}>
          <div className={styles.SubBoxInfo}>
            <div className={styles.subCard}>
              <h3>Mision</h3>
              <p>
                Facilitar la libertad de moverte con elegancia y practicidad. En
                Oscargo, creamos bicicletas de carga excepcionales, ideales para
                aventuras urbanas y escapadas con carga. Nuestro compromiso es
                diseñar bicicletas que ofrezcan comodidad y funcionalidad,
                brindándote la versatilidad necesaria en cada viaje. Transforma
                cada recorrido en una experiencia única con Oscargo.
              </p>
            </div>
          </div>
          <div className={styles.SubBoxInfo}>
            <div className={styles.subCard}>
              <h3>Vision</h3>
              <p>
                Visualizamos un mundo donde la movilidad sostenible es sinónimo
                de estilo. En Oscargo, aspiramos a ser líderes en proporcionar
                bicicletas de carga innovadoras que se integren perfectamente en
                la vida diaria. Nos esforzamos por ser reconocidos por nuestra
                calidad, versatilidad y el toque único que añadimos a cada
                viaje. Con Oscargo, el transporte y la aventura se fusionan para
                crear un futuro más emocionante y sostenible.
              </p>
            </div>
          </div>
        </div>
      </main>

      <main className={styles.mainServices}>
        {selectOpt == "" ? (
          <h1 className={styles.serviceTitle}>Servicios</h1>
        ) : (
          <div className={styles.barBtnBack} onClick={() => setSelectOpt("")}>
            <div className={styles.btnBack}>
              <div className={styles.boxIconBack}>
                <IoIosArrowRoundBack />
              </div>
              <p>Servicios</p>
            </div>
          </div>
        )}

        {selectOpt == "" ? (
          <div className={styles.boxCard}>
            <div
              className={styles.subBoxCard}
              onClick={() => setSelectOpt("miniCargo")}
            >
              <h1 className={styles.titleService}>Cargo Mini</h1>
            </div>
            <div
              className={styles.subBoxCard}
              onClick={() => setSelectOpt("medianaCargo")}
            >
              <h1 className={styles.titleService}>Cargo Mediana</h1>
            </div>
            <div
              className={styles.subBoxCard}
              onClick={() => setSelectOpt("longCargo")}
            >
              <h1 className={styles.titleService}>Cargo longjhon</h1>
            </div>
            <div
              className={styles.subBoxCard}
              onClick={() => setSelectOpt("remolque")}
            >
              <h1 className={styles.titleService}>Remolque</h1>
            </div>
          </div>
        ) : null}
        {selectOpt == "miniCargo" ? <MiniCargo /> : null}
        {selectOpt == "medianaCargo" ? <MedianaCargo /> : null}
        {selectOpt == "longCargo" ? <LongCargo /> : null}
        {selectOpt == "remolque" ? <Remolque /> : null}
      </main>
    </>
  );
}

export default HomePage;
