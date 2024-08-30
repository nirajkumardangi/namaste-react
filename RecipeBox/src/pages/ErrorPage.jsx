import styles from './ErrorPage.module.css';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{status}</h1>
        <p className={styles.message}>{statusText}</p>
        <a href='/' className={styles.homeLink}>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
