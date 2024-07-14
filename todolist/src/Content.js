import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items,handleCheck, handleDelete}) => 
    {
  

    // const [name,setName] = useState("earn");

    // function handleNameChange()
    // {
    // const names = ["hi","bye","die"];
    // const num = Math.floor(Math.random()*3);
    // setName(names[num]);
    //  }

    //  const change = () => {
    //   console.log('hi')
    //  }

    //  const [count,setCount] = useState(99)

    //  function incrementValue()
    //  {
    //   // setCount(count+1)
    //   // setCount(() => {return count + 1})
    //   setCount((count) => count + 1); // count = 0, updates to 1
    //   setCount((count) => count + 1); // count = 1, updates to 2
    //   setCount(count => count + 1);
    //  }

    //  function decrementValue()
    //  {
      
    //   setCount((count) => count - 1); 
    //   setCount((count) => count - 1); 
      
    //  }

 

  return (
    <main>
        {/* <p>Lets {name} money</p>
        <button onClick={handleNameChange}>subscribe</button>


        <button onClick={incrementValue}>+</button>
        <span>{count}</span>
        <button onClick={decrementValue}>-</button> */}
  {(items.length) ? (
    <ItemsList 
    items = {items}
    handleCheck = {handleCheck}
    handleDelete = {handleDelete}
    />
      
  ) : 
  (
    <p>Your list is Empty</p>
  )

} 
    </main>
  )
}

export default Content