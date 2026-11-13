
"use client";

import { useState } from "react";
import styles from "./ShowButton.module.css";

export default function ShowButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.container}>
      {isVisible && <p>Hello World</p>}

      <button
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
