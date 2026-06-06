/** Count-balanced grid layout for service page content card sections. */
export function serviceCardGridProps(baseClass: string, count: number) {
  return {
    className: `${baseClass} service-content-card-grid`,
    'data-card-count': String(count),
  } as const;
}
