// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.

import { Button } from 'antd';

function FoodBox({name, calories, servings, image, onDelete}){
  return (
      <div>
          <img src={image} alt={name} width='200px'></img>
          <p>Calories:{calories}</p>
          <p>Servings:{servings}</p>
          <p><strong>Total Calories:</strong> {calories}kcal</p>
          <Button  onClick={() => onDelete()}>Delete</Button>
      </div>
    )
  }
  export default FoodBox
