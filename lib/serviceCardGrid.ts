/** Balanced flex-wrap layout for service page content card sections. */
export function serviceCardGridProps(baseClass: string, count: number) {
  void count;
  return {
    className: `${baseClass} service-content-card-grid`,
  } as const;
}
