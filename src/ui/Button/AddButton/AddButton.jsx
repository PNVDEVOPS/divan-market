import React from 'react'

const AddButton = ({ onClick, text, type }) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className='text-white text-[20px] w-[100%] font-normal px-6 py-3 rounded-sm bg-neutral-700 hover:bg-neutral-500 duration-200 dark:bg-slate-200 dark:hover:bg-gray-400 '
  >
    {text}
  </button>
  )
}

export default AddButton