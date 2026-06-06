/** Plain /public/images path — Next.js Image handles URL encoding. */
export function ebrImage(folder: string, file: string): string {
  return `/images/${folder}/${file}`;
}
