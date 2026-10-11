import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Articles from './Articles';
import Layout from './components/Layout';
import AboutInfo from './AboutInfo';
import NotFoundPage from './NotFoundPage';
import './App.css';


function App() {

  let [registred, setRegistred] = useState(false);
  return (
    <div>

      <div style={{textAlign: "center"}}>
        <h3>Пользователь авторизирован: {registred ? "TRUE" : "FALSE"}</h3>
        <button onClick={()=>setRegistred({registred: true})}>Авторизация</button>
      </div>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={registred ? <About /> : <h2>Получить доступ к этой странице могут только авторизированные пользователи</h2>} />
          <Route path="about/:id" element={<AboutInfo />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles-as" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/* import { useState, useEffect } from 'react';
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
      <h1>Книга рецептов</h1>

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
        <p>Ничего не найдено </p>
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
            {meal.strCategory && <p> {meal.strCategory}</p>}
            {meal.strArea && <p> {meal.strArea}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
 */