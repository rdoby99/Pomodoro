import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className="inline-block border-2 border-white py-4 px-8 rounded-full bg-black/50 hover:bg-white hover:text-black transition duration-200">{props.text}</button>
    </div>
  );
};

export default Button;