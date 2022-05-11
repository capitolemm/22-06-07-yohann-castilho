import Button from 'src/common/Button';

import errorMessageStyles from './errorMessage.module.scss';

const ErrorMessage = () => (
  <div className={errorMessageStyles.background}>
    <div className={errorMessageStyles.wrapper}>
      <span>👨‍💻​</span>
      <h1>Oops!, something went wrong.</h1>
      <p>Please refresh the page to try again.</p>
      <Button
        className={errorMessageStyles.button}
        onClick={() => (window.location.href = '/')}
      >
        Refresh
      </Button>
    </div>
  </div>
);

export default ErrorMessage;
