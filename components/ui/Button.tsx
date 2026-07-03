type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

  const styles =
    variant === "primary"
      ? "bg-[var(--navy)] text-white hover:bg-[#16335e]"
      : "border border-[var(--navy)] text-[var(--navy)] hover:bg-gray-100";

  return <button className={`${base} ${styles}`}>{children}</button>;
}
