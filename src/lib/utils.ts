import { createElement, ReactNode } from 'react';

export const toTime = (date: string | undefined): number => {
  if (!date) return 0;
  const normalized = date.length === 7 ? `${date}-01` : date;
  return new Date(normalized).getTime();
};

const urlPattern = /(https?:\/\/[^\s]+)/g;

export const renderTextWithLinks = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  const lines = text.split('\n');

  lines.forEach((line, lineIndex) => {
    const segments = line.split(urlPattern);

    segments.forEach((segment) => {
      if (!segment) return;

      if (segment.match(urlPattern)) {
        nodes.push(
          createElement(
            'a',
            {
              key: `link-${nodes.length}`,
              href: segment,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'underline underline-offset-4 text-blue-300 hover:text-blue-200',
            },
            segment
          )
        );
        return;
      }

      nodes.push(segment);
    });

    if (lineIndex < lines.length - 1) {
      nodes.push(createElement('br', { key: `br-${lineIndex}` }));
    }
  });

  return nodes;
};
