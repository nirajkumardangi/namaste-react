import { useState, useEffect } from "react";

export function useFetchFood(api) {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(api);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch the data.');
        }

        if (!data.meals) {
          throw new Error('No meals found.');
        }

        setMealsData(data.meals);
        // setFilteredMeals(data.meals);
      } catch (err) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return {isLoading, error, mealsData}
}
