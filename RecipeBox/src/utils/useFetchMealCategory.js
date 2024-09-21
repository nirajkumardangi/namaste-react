import { useEffect, useState } from 'react';

export function useFetchMealCategory(api) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(api);
        const data = await res.json();

        if (!res.ok) {
          throw new Error('Failed to fetch the categories data.');
        }

        if (!data.categories) {
          throw new Error('categories not found!');
        }

        setCategories(data.categories || []);
      } catch (err) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}
