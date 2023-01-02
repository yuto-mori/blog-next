export function addClass(addClasses: string[]) {
  return new Intl.ListFormat('en', {
    style: 'narrow',
    type: 'unit',
  }).format([...addClasses]);
}
