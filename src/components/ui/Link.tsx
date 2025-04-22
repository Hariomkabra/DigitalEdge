import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  // This is a simplified Link component.
  // In a real-world app, you would use React Router's Link component instead.
  return (
    <a
      href={href}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};