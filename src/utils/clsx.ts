export type ClassNameExpression = {
  condition?: boolean | null,
  class: string,
} | string | false | undefined | null;

export const clsx = (...expressions: ClassNameExpression[]): string => {
  return expressions
    .filter(Boolean)
    .filter(expression => typeof expression === 'string' || expression && expression?.condition)
    .map(expression => typeof expression !== 'string' ? expression && expression?.class : expression)
    .join(' ')
}
