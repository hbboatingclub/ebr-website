import { Fragment, type ReactNode } from 'react';

const ACCENT_PHRASES = ['Electric Boats', 'Duffy Boats'] as const;

function decodeTitleEntities(title: string): string {
  return title
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

export function highlightServiceHeroTitle(title: string): ReactNode {
  const text = decodeTitleEntities(title);
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let matchIndex = -1;
    let matchPhrase: (typeof ACCENT_PHRASES)[number] | null = null;

    for (const phrase of ACCENT_PHRASES) {
      const index = remaining.indexOf(phrase);
      if (index !== -1 && (matchIndex === -1 || index < matchIndex)) {
        matchIndex = index;
        matchPhrase = phrase;
      }
    }

    if (matchIndex === -1 || !matchPhrase) {
      parts.push(remaining);
      break;
    }

    if (matchIndex > 0) {
      parts.push(remaining.slice(0, matchIndex));
    }

    parts.push(
      <span key={key} className="service-hero-title__accent">
        {matchPhrase}
      </span>
    );
    key += 1;
    remaining = remaining.slice(matchIndex + matchPhrase.length);
  }

  if (parts.length === 0) {
    return text;
  }

  if (parts.length === 1) {
    return parts[0];
  }

  return <Fragment>{parts}</Fragment>;
}

type ServiceHeroTitleProps = {
  className?: string;
  title: string;
};

export default function ServiceHeroTitle({ className, title }: ServiceHeroTitleProps) {
  return <h1 className={className}>{highlightServiceHeroTitle(title)}</h1>;
}
