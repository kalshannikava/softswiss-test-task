import './Button.scss';


type ButtonProps = {
  label: string,
  variant?: 'primary' | 'secondary';
  className?: string,
}

const Button = ({
  label,
  variant = 'primary',
  className,
}: ButtonProps) => {
  return <button className={`button button--${variant} ${className}`}>{label}</button>;
};

export default Button;
