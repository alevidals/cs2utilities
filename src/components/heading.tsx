import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { ReactNode } from "react";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
} & React.HtmlHTMLAttributes<HTMLHeadingElement>;

const headingVariants = cva("font-bold", {
  variants: {
    size: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

export function Heading(props: Props) {
  const { as, children, className } = props;

  const Component = as;

  return (
    <Component className={cn(headingVariants({ size: as, className }))}>
      {children}
    </Component>
  );
}
