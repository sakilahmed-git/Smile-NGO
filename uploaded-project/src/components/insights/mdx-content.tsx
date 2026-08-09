import type { ReactNode } from "react";

type MdxContentProps = {
  children: ReactNode;
};

export function MdxContent({ children }: MdxContentProps) {
  return (
    <div className="insight-content">
      {children}
    </div>
  );
}