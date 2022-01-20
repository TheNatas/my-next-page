import { NextComponentType } from "next";
import { useState } from "react";
import Image from "next/image";

import cloud from "../public/cloud.png";
import secretInstagram from "../public/instagram.png";
import secretTwitter from "../public/twitter.png";

import styles from "./header.module.css";



const Header: NextComponentType = () => {
  const [visibility, setVisibility] = useState({
    instagramVisible: false,
    twitterVisible: false
  })

  return(
    <section id={styles.header}>

      <div 
        className={`${styles.upperCloud} ${visibility.instagramVisible ? styles.reveal : ''}`} 
        onClick={() => setVisibility({
          ...visibility,
          instagramVisible: !visibility.instagramVisible
        })}>
        <Image
          src={cloud}
          alt="cloud"
        />
      </div>
      
      <a href="https://instagram.com/natasnael_" title="Instagram"
        className={styles.secretInstagram}>
        <Image
          src={secretInstagram}
          alt="instagram"
        />
      </a>

      <h1 className={styles.h1}>Natanael Alves Gabriel</h1>

      <div 
        className={`${styles.lowerCloud} ${visibility.twitterVisible ? styles.reveal : ''}`} 
        onClick={() => setVisibility({
          ...visibility,
          twitterVisible: !visibility.twitterVisible
        })}>
        <Image
          src={cloud}
          alt="cloud"
        />
      </div>
      <a href="https://twitter.com/TheNatas_" title="Twitter"
        className={styles.secretTwitter}>
        <Image
          src={secretTwitter}
          alt="twitter"
        />
      </a>
    </section>
  )
}

export default Header;