/** Tiny classnames helper: joins truthy class fragments with a single space.
 *  Dependency-free; sufficient for conditional Tailwind classes in this project. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
