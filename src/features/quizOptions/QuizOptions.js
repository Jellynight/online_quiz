import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCategories from './getCategories';
import { setCategories  } from './categorySlice';

export function QuizOptions() {
  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await dispatch(getCategories());
      if (getCategories.fulfilled.match(result)) {
        dispatch(setCategories(result.payload.trivia_categories));
      }
    };
    fetchCategories();
  }, [dispatch]);



  return (
    <div>
      <h3>Select a category to be Quizzed on:</h3>
      <select id="categorielist">
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name} 
          </option>
        ))}
      </select>
      <select id='dificulty'></select>
      <select id='numOfQuestions'></select>
      <button id='startQuiz' >Start the Quiz</button>
    </div>
  );
}