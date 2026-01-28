import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;          
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  isLoading?: boolean;   
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  href, 
  onClick, 
  type = "button",
  fullWidth = false,
  isLoading = false
}) => {
  
  const widthStyle = fullWidth ? { width: '100%' } : {};

  if (href) {
    return (
      <a 
        href={href} 
        className={styles.button} 
        style={widthStyle}
      >
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${styles.button} ${isLoading ? styles.loading : ''}`}
      style={widthStyle}
      disabled={isLoading}
    >
      <span>{isLoading ? "Enviando..." : text}</span>
    </button>
  );
};

export default Button;