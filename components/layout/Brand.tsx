import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/logos/logo.svg"
        alt="SAMNKOSI Technology Group"
        width={52}
        height={52}
        priority
      />

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--navy)]">
          SAMNKOSI
        </h1>

        <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
          Technology Group
        </p>
      </div>
    </Link>
  );
}
