import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-white text-brand-purple hover:bg-gray-100 focus:ring-white shadow-lg",
    secondary: "bg-brand-purple text-white hover:bg-brand-light focus:ring-brand-purple shadow-md",
    outline: "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;