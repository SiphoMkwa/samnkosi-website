import { ReactNode } from "react";
import Card from "./Card";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card>
      <div className="mb-6 inline-flex rounded-xl bg-[var(--gray)] p-3">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-[var(--navy)]">{title}</h3>

      <p className="mt-4 leading-7 text-gray-600">{description}</p>
    </Card>
  );
}
