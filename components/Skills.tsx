import { NextComponentType } from "next";

import imgEnglish from "../public/english.png";
import imgStatic from "../public/static.png";
import imgJsSmall from "../public/js-small.png";

import styles from "./skills.module.css";
import Image from "next/image";

const Skills : NextComponentType = () => {
  return(
    <section id={styles.skills}>
      <h2>Tenho esses conhecimentos básicos:</h2>
      <ul className={styles.ul}>
        <li className={styles.liEnglish}>
          <Image src={imgEnglish} alt=""/>
          {'\u00A0\u00A0\u00A0'}
          Inglês
        </li>
        <li className={styles.liStatic}>
          <Image src={imgStatic} alt=""/>
          {'\u00A0\u00A0\u00A0'}
          Web estática
        </li>
        <li className={styles.liJs}>
          <Image src={imgJsSmall} alt=""/>
          {'\u00A0\u00A0\u00A0'}
          JavaScript
        </li>
      </ul>
    </section>
  )
}

export default Skills;