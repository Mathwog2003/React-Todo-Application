import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <>
    <form className='addForm' onSubmit={handleSubmit }>
    <label htmlFor='addForm'>
        Add Item
    </label>
    <input 
    autoFocus
    type='text'
    id='addItem'
    placeholder='Add Item'
    required
    value={newItem}
    onChange={(e)=> setNewItem(e.target.value)}
    />
    <button
    type='submit'
    arial-label="Add Item"

    >
        <FaPlus />
    </button>
    </form>
    </>
  )
}

export default Additem