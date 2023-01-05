import { useCallback } from 'react';

export const useAddClass = () => {
  const addClass = useCallback((addClasses: string[]) => {
    return new Intl.ListFormat('en', {
      style: 'narrow',
      type: 'unit',
    }).format([...addClasses]);
  }, []);
  return {addClass};
};
