import { Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = ({ createNewElement }) => {
    const [AddName, setAddName] = useState("")
    const [AddImage, setAddImage] = useState("")
    const [AddCalories, setAddCalories] = useState("")
    const [AddServings, setAddServings] = useState("")
    const submit = (e) => {
        e.preventDefault()
        createNewElement(
            {
                AddName,
                AddImage,
                AddCalories,
                AddServings
            })
        setAddName("")
        setAddImage("")
        setAddCalories("")
        setAddServings("")
        }

  return (
    <form onSubmit={submit}>
      <Input
        placeholder="Food Name"
        type="text"
        id="name"
        value={AddName}
        onChange={(e)=> setAddName(e.target.value)}
      />
      <Input
        placeholder="Calories"
        type="number"
        id="calories"
        value={AddCalories}
        onChange={(e)=> setAddCalories(e.target.value)}
      />
      <Input
        placeholder="Image URL"
        type="text"
        id="image"
        min={0}
        value={AddImage}
        onChange={(e)=> setAddImage(e.target.value)}
      />
      <Input
        placeholder="Servings"
        type="number"
        id="servings"
        value={AddServings}
        onChange={(e)=> setAddServings(e.target.value)}
      />
      <button type="submit">
        Create
      </button>
    </form>
  );
  
}
export default AddFoodForm;
