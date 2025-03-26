import Link from 'next/link';

import { ReactNode } from 'react';

interface PrimaryButtonProps {
	children: ReactNode;
	href: string;
	className?: string;
	target?: boolean;
}

export default function PrimaryButton({
	children,
	href,
	className = '',
	target = false,
}: PrimaryButtonProps) {
	return (
		<Link
			href={href}
			target={target ? "_blank": undefined}
			className={`inline-flex items-center px-4 md:px-8 py-2 md:py-3 border border-transparent text-base lg:text-base font-medium rounded-lg md:rounded-full text-white bg-gradient-to-br from-primary to-secondary transition duration-500 hover:bg-gradient-to-br hover:from-secondary hover:to-primary ${className}`}>
			{children}
		</Link>
	);
}
