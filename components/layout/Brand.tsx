import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  /**
   * "light" — for use on white/light backgrounds (default).
   * "dark" — for use on the navy footer; text switches to white and the
   * icon (which is navy/blue on transparent) gets a light backing chip
   * so it stays legible against the navy background.
   */
  variant?: "light" | "dark";
};

export default function Brand({ variant = "light" }: BrandProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className="flex items-center gap-4">
      {isDark ? (
        <span className="flex h-[52px] w-[59px] items-center justify-center rounded-xl bg-white p-1.5">
          <Image
            src="/logos/icon.png"
            alt="SAMNKOSI Technology Group"
            width={50}
            height={44}
            priority
          />
        </span>
      ) : (
        <Image
          src="/logos/icon.png"
          alt="SAMNKOSI Technology Group"
          width={59}
          height={52}
          priority
        />
      )}

      <div>
        <h1
          className={`text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-[var(--navy)]"
          }`}
        >
          SAMNKOSI
        </h1>

        <p
          className={`text-xs uppercase tracking-[0.35em] ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Technology Group
        </p>
      </div>
    </Link>
  );
}
