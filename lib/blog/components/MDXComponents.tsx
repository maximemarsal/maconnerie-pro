"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Composants MDX personnalisés pour le blog
 * Ces composants peuvent être utilisés directement dans les fichiers .mdx
 */

// Composant Call To Action
export function CallToAction({
  href = "/contact",
  text = "Demander un devis gratuit",
  variant = "primary",
}: {
  href?: string;
  text?: string;
  variant?: "primary" | "secondary";
}) {
  const baseStyles =
    "inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors my-6";
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {text}
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}

// Composant Image optimisée
export function BlogImage({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-8">
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Composant Alerte/Note
export function Alert({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "success" | "error";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  const icons = {
    info: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    warning: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    ),
    success: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    error: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  };

  return (
    <div className={`rounded-xl border p-4 my-6 ${styles[type]}`}>
      <div className="flex gap-3">
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icons[type]}
        </svg>
        <div>
          {title && <strong className="block mb-1">{title}</strong>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}

// Composant Citation
export function Quote({
  author,
  role,
  children,
}: {
  author?: string;
  role?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-primary">
      <p className="text-lg text-gray-700 italic mb-3">{children}</p>
      {author && (
        <footer className="text-sm text-gray-500">
          <strong>{author}</strong>
          {role && <span>, {role}</span>}
        </footer>
      )}
    </blockquote>
  );
}

// Composant Vidéo YouTube
export function YouTube({ id }: { id: string }) {
  return (
    <div className="relative aspect-video my-8 rounded-xl overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

// Composant Liste avec checkmarks
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="my-6 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Composant Grille de statistiques
export function Stats({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8 p-6 bg-gray-50 rounded-xl">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">
            {item.value}
          </div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

// Export de tous les composants pour MDX
export const mdxComponents = {
  CallToAction,
  BlogImage,
  Alert,
  Quote,
  YouTube,
  CheckList,
  Stats,
  // Override des éléments HTML par défaut si nécessaire
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <BlogImage
      src={typeof props.src === "string" ? props.src : ""}
      alt={props.alt || ""}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={props.href || "#"}
      className="text-primary hover:text-primary-dark underline"
      {...(props.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {props.children}
    </Link>
  ),
};

export default mdxComponents;
