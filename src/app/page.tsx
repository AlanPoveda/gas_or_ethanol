"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [ethanolPrice, setEthanolPrice] = useState("");
  const [gasolinePrice, setGasolinePrice] = useState("");
  const [result, setResult] = useState("");

  function ethanolPrices() {
    const ethanol = parseFloat(ethanolPrice);
    const gasoline = parseFloat(gasolinePrice);

    if (isNaN(ethanol) || isNaN(gasoline)) {
      setResult("Please enter valid numbers for both prices.");
      return;
    }

    const ratio = ethanol / gasoline;
    if (ratio <= 0.7) {
      setResult("It's better to use ethanol. 🪴");
    } else {
      setResult("It's better to use gasoline. 🛢️");
    }
  }

  return (
    <div className={styles.container}>
      <h1>Gas or Ethanol ⛽️</h1>
      <div className={styles.inputContainer}>
        <input
          type="number"
          placeholder="Ethanol price"
          value={ethanolPrice}
          onChange={(e) => setEthanolPrice(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Gasoline price"
          value={gasolinePrice}
          onChange={(e) => setGasolinePrice(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <button onClick={ethanolPrices} className={styles.button}>
        Generate
      </button>
      <div className={styles.result}>{result}</div>
    </div>
  );
}
