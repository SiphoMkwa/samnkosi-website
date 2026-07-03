type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--blue)]">
      {children}
    </span>
  );
}
