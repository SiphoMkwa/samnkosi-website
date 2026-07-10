import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

  const styles =
    variant === "primary"
      ? "bg-[var(--navy)] text-white hover:bg-[#16335e]"
      : "border border-[var(--navy)] text-[var(--navy)] hover:bg-gray-100";

  const classes = `${base} ${styles} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;

    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} type={buttonProps.type ?? "button"} {...buttonProps}>
      {children}
    </button>
  );
}
