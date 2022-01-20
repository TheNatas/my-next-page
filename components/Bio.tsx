import { NextComponentType } from "next";
import Image from "next/image";

import imgJs from "../public/js.png";
import imgAngular from "../public/angular.png";

import styles from "./bio.module.css";

const Bio: NextComponentType = () => {
  return(
    <section id={styles.bio}>

      <div className={styles.containerBio}>

        <div className={styles.imgJs}>
          <Image src={imgJs} alt="JavaScript logo"
          />
        </div>

        <p>
          Em meados de 2020, em meio à pandemia, comecei a estudar programação, inicialmente através do canal <a href="https://www.youtube.com/c/CursoemVídeo">Curso Em Vídeo</a> do professor Guanabara. Após ver o básico de JavaScript, decidi fazer o <a href="https://online-learning.harvard.edu/course/cs50-introduction-computer-science">CS50</a> - curso gratuito da Harvard, onde fundamentei meu aprendizado em ciência da computação praticando em aulas desde C99 e bancos de dados até Python e JavaScript em desenvolvimento web.
        </p>

      </div>

      <div className={styles.containerBio}>

        <div className={styles.imgAngular}>
          <Image src={imgAngular} alt="Angular logo"
          />
        </div>

        <p id={styles.pSecond}>
          Hoje já iniciei um curso de graduação na área e recebi uma bolsa de estudos para o curso de Web FullStack, da <a href="https://letscode.com.br">Let&apos;s Code</a>, através de uma campanha do Santander. Por já ter passado pelos módulos de front-end, onde trabalhamos com Angular, tenho mais intimidade nessa área, porém estou bem animado para aprender também sobre back-end, onde veremos Java.
        </p>
        
      </div>

    </section>
  )
}

export default Bio;