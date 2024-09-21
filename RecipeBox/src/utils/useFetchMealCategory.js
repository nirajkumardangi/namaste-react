import { useEffect, useState } from 'react';

export function useFetchMealCategory(api) {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCategory() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(api);
        const data = await res.json();

        if (!res.ok) {
          throw new Error('Failed to fetch the category data.');
        }

        if (!data.category) {
          throw new Error('Category not found!');
        }

        setCategory(data.category);
      } catch (err) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategory();
  }, []);

  return { category, isLoading, error };
}
