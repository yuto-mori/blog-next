export function addClass(addClasses: string[]) {
  return new Intl.ListFormat('en', {
    style: 'narrow',
    type: 'unit',
  }).format([...addClasses]);
}

export const perPage = (): number => 2;
