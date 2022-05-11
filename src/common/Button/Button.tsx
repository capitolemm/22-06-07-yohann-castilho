import cx from 'classnames';

import buttonStyles from './button.module.scss';

interface IProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button = (props: IProps) => {
  const className = cx(buttonStyles.button, props.className);

  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
