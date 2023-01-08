import React from 'react';
import Counter from './Counter';
import Form from './Form';

const page = () => {
  return (
    <>
      <main className="bg-slate-900 min-h-screen  text-white flex  justify-center items-center">
        <Counter />
        {/* <Form /> */}
      </main>
    </>
  );
};

export default page;
