"use client";

import Link from "next/link";
import styles from "./Acerca.module.css";

import { FaCss3, FaJava, FaGithub } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";


const colaborators = [
  {
    name: "German Vallejos",
    github: "https://github.com/german3x"
  },
  {
    name: "Graciana Porris",
    github: "https://github.com/porras8"
  },
  {
    name: "Yanina Torres",
    github: "https://github.com/yanineitor"
  },
  {
    name: "Alejo Cazal",
    github: "https://github.com/AlejoMC25"
  },
  {
    name: "Francisco Gonzalez",
    github: "https://github.com/franciscoG98"
  },
]

const tech_stack = [
  {
    label: "CSS",
    icon: <FaCss3 />
  },
  {
    label: "JS",
    icon: <FaJs />
  },
  {
    label: "Java",
    icon: <FaJava />
  },
  {
    label: "Github",
    icon: <FaGithub />
  },
  {
    label: "Vercel",
    icon: <IoLogoVercel />
  },
]

export default function AcercaPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Acerca de Nosotros</h1>

      <p className={styles.copy}>
        En ClotheShop, somos un e-commerce de indumentaria creado como proyecto académico, donde unimos tecnología y moda en una experiencia web única. Con un diseño atractivo, funcional y pensado para el usuario, buscamos transformar la compra online en algo sencillo y agradable. ¡Explorá nuestra tienda!
      </p>

      <h2>Equipo de trabajo:</h2>

      <ul className={styles.colaborators}>
        {colaborators.map(i => (
          <li key={i.name}>
            <Link className={styles.github_link} href={i.github}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2>Tech Stack</h2>
      <section className={styles.tech_stack_container}>
        {
          tech_stack.map(i => (
            <div key={i.label} className={styles.tech_stack}>
              {i.icon}
              <span>{i.label}</span>
            </div>
          ))
        }
      </section>

    </main>
  );
}
