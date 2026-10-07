import { useState, useEffect } from 'react';
import { mealsApi } from '../api/meals';

export function useMeals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMeals = async (fn) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fn();
      // ВАЖНО: meals может быть null, если ничего не найдено!
      setMeals(data.meals || []);
    } catch (err) {
      setError(err.message);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  return { meals, loading, error, loadMeals };
}