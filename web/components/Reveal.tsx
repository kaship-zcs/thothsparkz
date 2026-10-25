"use client";
import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type FunctionComponent,
  type ReactNode,
} from "react";

type RevealOwnProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RevealProps = RevealOwnProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof RevealOwnProps> &
  Partial<Pick<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel">>;

export default function Reveal({
  as,
  children,
  className = "",
  delay = 0,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = (as || "div") as unknown as FunctionComponent<Record<string, unknown>>;

  return createElement(
    Tag,
    {
      ref,
      className: `reveal ${shown ? "in" : ""} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
      ...rest,
    },
    children
  );
}
