import React from 'react';

const List = (props) => {
  const numbers = props.numbers;

  const listitems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  return (
    <>
      <ul>{listitems}</ul>
    </>
  );
};

export default List;