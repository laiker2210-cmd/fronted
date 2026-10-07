/* import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li><a href="/">Home page</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/articles">Articles</a></li>
      </ul>
    </div>
  );
}

export default App; */

import { useState, useEffect } from 'react';
import { useMeals } from './hooks/useMeals';
import { mealsApi } from './api/meals';

function App() {
  const { meals, loading, error, loadMeals } = useMeals();
  const [search, setSearch] = useState("");

  // Загружаем случайный рецепт при старте
  useEffect(() => {
    loadMeals(() => mealsApi.search("chicken"));
  }, []);

  // Поиск по Enter или кнопке
  const handleSearch = () => {
    if (search.trim()) {
      loadMeals(() => mealsApi.search(search));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🍽️ Книга рецептов</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSearch()}
          placeholder="Введите блюдо (например: pasta)"
          style={{ padding: 8, marginRight: 8, width: 250 }}
        />
        <button onClick={handleSearch}>Найти</button>
      </div>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {!loading && meals.length === 0 && (
        <p>Ничего не найдено 😢</p>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {meals.map(meal => (
          <div key={meal.idMeal} style={{ border: "1px solid #ccc", padding: 10, borderRadius: 8 }}>
            <img
              src={`/images/${meal.idMeal}.jpg`}
              alt={meal.strMeal}
              style={{ width: "100%", borderRadius: 8 }}
              onError={e => {
                e.target.onerror = null;
                e.target.src = `/images/${meal.idMeal}.svg`;
              }}
            />
            <h3>{meal.strMeal}</h3>
            {meal.strCategory && <p>🏷️ {meal.strCategory}</p>}
            {meal.strArea && <p>🌍 {meal.strArea}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
