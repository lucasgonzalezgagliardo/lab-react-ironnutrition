// src/App.js
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import Search from './components/Search'
import { Card } from 'antd';

function App () {
  
  const [foodList, setFoodList] = useState(foods);
  const [foodFilter, setFoodFilter] = useState("")


  const createNewElement = ({AddName, AddImage, AddCalories, AddServings}) => {
    const newFood = {name: AddName, image: AddImage, calories: AddCalories, servings: AddServings}
    setFoodList([newFood, ...foodList]);
    console.log(foodList)
  }

  //FILTER:
  const search = (value) => {
    setFoodFilter(value)
  }

  const filterFood = foodList.filter((food)=>
  food.name.toLowerCase().includes(foodFilter.toLowerCase()))

  const deleteFood = (newFood) => {
    setFoodList(foodList.filter((food) => food.name !== newFood))
  }

  return (
    <>
      <div className="App">
        <h2>Food Entry</h2>
        <AddFoodForm createNewElement={createNewElement} />
        <h2>Search</h2>
        <Search search={search} />
        <h1>Food List</h1>
        {filterFood.map((food) => {
          return (
            <Card key={food.name} title={food.name}>
              <FoodBox  {...food} onDelete={() => deleteFood(food.name)} />
            </Card>
          );
        })
        }
        {/* </div> */}
      </div>
    </>
  )
}



export default App;