import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Hello = () => {
  let counter;
  useTracker(() => {
    counter = LinksCollection.find();
  });
  const increment = () => {
    LinksCollection.insert(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
