import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Проектирование внутризоновой сети SDH
        </p>
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Исходный код{" "}
          </a>
        </div>
      </div>

{/*       <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Параметры расчета <span>-&gt;</span>
          </h2>
          <p>Ввода параметров населенных пунктов и расчётных показателей сети</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Параметры кабеля <span>-&gt;</span>
          </h2>
          <p>Форма для ввода параметров кабеля.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Кол-во абонентов <span>-&gt;</span>
          </h2>
          <p>Численность населения» и «Расстояние»</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Населенные пункты <span>-&gt;</span>
          </h2>
          <p>
            Выбор кол-ва населенных пунктов 
          </p>
        </a>
      </div>
    </main>
  );
}
