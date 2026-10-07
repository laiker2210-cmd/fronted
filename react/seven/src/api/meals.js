import mealsData from '../data/meals.json';

const allMeals = mealsData.meals || [];

export const mealsApi = {
  // Поиск по названию (работает локально)
  search: (query) => {
    const filtered = allMeals.filter(meal =>
      meal.strMeal.toLowerCase().includes(query.toLowerCase())
    );
    // Возвращаем Promise, чтобы совместимость с fetch осталась
    return Promise.resolve({ meals: filtered.length ? filtered : null });
  },

  // Случайный рецепт
  random: () => {
    const randomMeal = allMeals[Math.floor(Math.random() * allMeals.length)];
    return Promise.resolve({ meals: [randomMeal] });
  },

  // Рецепт по ID
  lookup: (id) => {
    const meal = allMeals.find(m => m.idMeal === id);
    return Promise.resolve({ meals: meal ? [meal] : null });
  },

  // Фильтр по категории
  byCategory: (category) => {
    const filtered = allMeals.filter(m => m.strCategory === category);
    return Promise.resolve({ meals: filtered.length ? filtered : null });
  },

  // Фильтр по стране
  byArea: (area) => {
    const filtered = allMeals.filter(m => m.strArea === area);
    return Promise.resolve({ meals: filtered.length ? filtered : null });
  },

  // Фильтр по ингредиенту
  byIngredient: (ingredient) => {
    const filtered = allMeals.filter(meal => {
      // Проверяем все 20 возможных полей ингредиентов
      for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        if (ing && ing.toLowerCase().includes(ingredient.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    return Promise.resolve({ meals: filtered.length ? filtered : null });
  },

  // Список всех категорий
  categories: () => {
    const cats = [...new Set(allMeals.map(m => m.strCategory))].sort();
    return Promise.resolve({ categories: cats.map(c => ({ strCategory: c })) });
  },

  // Список всех стран
  areas: () => {
    const areas = [...new Set(allMeals.map(m => m.strArea).filter(Boolean))].sort();
    return Promise.resolve({ meals: areas.map(a => ({ strArea: a })) });
  },

  // Список всех ингредиентов
  ingredients: () => {
    const ings = new Set();
    allMeals.forEach(meal => {
      for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        if (ing) ings.add(ing);
      }
    });
    return Promise.resolve({ meals: [...ings].sort().map(i => ({ strIngredient: i })) });
  },
};