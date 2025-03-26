import { ReactNode, MouseEvent } from 'react';

interface SecondaryButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  loading?: boolean;
}

export default function SecondaryButton({
  children,
  className = '',
  onClick = () => {},
  loading = false,
}: SecondaryButtonProps) {
  if (loading) {
    return (
      <div
        className={`inline-flex items-center px-4 md:px-8 py-2 md:py-3 border border-transparent text-sm lg:text-base font-medium rounded-lg md:rounded-full text-white bg-gradient-to-br from-primary to-secondary transition duration-500 hover:bg-gradient-to-br hover:from-secondary hover:to-primary cursor-pointer ${className}`}
        onClick={onClick}
      >
        <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div
      className={`inline-flex items-center px-4 md:px-8 py-2 md:py-3 border border-transparent text-sm lg:text-base font-medium rounded-lg md:rounded-full text-white bg-gradient-to-br from-primary to-secondary transition duration-500 hover:bg-gradient-to-br hover:from-secondary hover:to-primary cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
