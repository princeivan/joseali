import { SearchX } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  action?: ReactNode;
};

export default function EmptyState({ title, description, action }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm border border-dashed border-line bg-sand-50 px-6 py-16 text-center">
      <SearchX className="h-9 w-9 text-ink-500" aria-hidden="true" />
      <h3 className="mt-4 font-display text-xl text-forest-950">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-ink-500">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
