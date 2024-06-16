import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Проектирование внутризоновой сети SDH
        </p> */}
        <div>
          <a
            href="https://github.com/pplays33/sdh-network-designer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Исходный код{" "}
          </a>
        </div>
      </div>

      <div className={styles.center}>
{/*         <Image
          className={styles.logo}
          src="/ill.png"
          alt="illustration SDH"
          width={280}
          height={137}
          priority
        /> */}
      </div>

      <div className={styles.grid}>
        <Link
          href="/calculationForm"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Параметры расчета <span>-&gt;</span>
          </h2>
          <p>Ввода параметров населенных пунктов и расчётных показателей сети</p>
        </Link>

        <Link
          href="/cableForm"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Параметры кабеля <span>-&gt;</span>
          </h2>
          <p>Форма для ввода параметров кабеля.</p>
        </Link>

        <Link
          href="/networkForm"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Кол-во абонентов <span>-&gt;</span>
          </h2>
          <p>Численность населения» и «Расстояние»</p>
        </Link>

        <Link
          href="/capitalCoast"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Суммарные затраты <span>-&gt;</span>
          </h2>
          <p>
            Состав оборудования и их стоимость для расчитываемой сети 
          </p>
        </Link>

        <Link
          href="/calcPage"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Расчет кол-ва каналов <span>-&gt;</span>
          </h2>
          <p>
            Калькулятор для расчета количества каналов по заданной нагрузке и задержке
          </p>
        </Link>

        <Link
          href="/resultPage"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Результаты <span>-&gt;</span>
          </h2>
          <p>
            Результаты расчета
          </p>
        </Link>

        <Link
          href="/outLoadPage"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h3>
            Расчет исходящих нагрузок <span>-&gt;</span>
          </h3>
          <p>
            Результаты расчета исходящих нагрузок "Из<span>-&gt;</span>В"
          </p>
        </Link>

      </div>
    </main>
  );
}
