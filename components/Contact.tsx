import { NextComponentType } from "next";

import styles from "./contact.module.css";

const Contact : NextComponentType = () => {
  return(
    <section id={styles.contact}>
      <h3>Acompanhe minhas atualizações:</h3>
      <a href="https://github.com/TheNatas">GitHub</a>
      {'\u00A0'}
      <a href="https://linkedin.com/in/natanael-alves-gabriel">LinkedIn</a>
    </section>
  )
}

export default Contact;