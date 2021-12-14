import { GetStaticProps } from 'next';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

import Logo from '../assets/icons/logo';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <a>
              <h1>Como Utilizar Hooks</h1>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <div className={styles.infoRow}>
                <div className={styles.infoContainer}>
                  <AiOutlineCalendar />
                  <time>15 Mar 2021</time>
                </div>
                <div className={styles.infoContainer}>
                  <FiUser />
                  <span>Joseph Oliveira</span>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h1>Criando um app CRA do zero</h1>
              <p>
                Tudo sobre como criar a sua primeira aplicação utilizando Create
                React App
              </p>
              <div className={styles.infoRow}>
                <div className={styles.infoContainer}>
                  <AiOutlineCalendar />
                  <time>15 Mar 2021</time>
                </div>
                <div className={styles.infoContainer}>
                  <FiUser />
                  <span>Joseph Oliveira</span>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h1>Como Utilizar Hooks</h1>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <div className={styles.infoRow}>
                <div className={styles.infoContainer}>
                  <AiOutlineCalendar />
                  <time>15 Mar 2021</time>
                </div>
                <div className={styles.infoContainer}>
                  <FiUser />
                  <span>Joseph Oliveira</span>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <h1>Criando um app CRA do zero</h1>
              <p>
                Tudo sobre como criar a sua primeira aplicação utilizando Create
                React App
              </p>
              <div className={styles.infoRow}>
                <div className={styles.infoContainer}>
                  <AiOutlineCalendar />
                  <time>15 Mar 2021</time>
                </div>
                <div className={styles.infoContainer}>
                  <FiUser />
                  <span>Joseph Oliveira</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
