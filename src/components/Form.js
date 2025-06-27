import React from "react";

export default function Forms({ handleSubmit, value, setValue }) {
  console.log("Form Component");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='flex pt-2'>
      <input
        type='text'
        name='value'
        className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
        placeholder='Please write to-do item.'
        value={value}
        onChange={handleChange}
      />

      <input
        className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200'
        type='submit'
        value='Add'
      />
    </form>
  );
}
