import { NextComponentType } from "next";

import style from "./footer.module.css";

const Footer : NextComponentType = () => {
  return(
    <section id={style.footer}>
      <div style={{marginBottom: "2rem"}}>
        Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> e <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a>
      </div>
      <em>® Natanael Alves Gabriel - 2021</em>
    </section>
  )
}

export default Footer;