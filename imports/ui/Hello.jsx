import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ListsCollection } from '../api/lists';
import { LinkCollection } from '../api/link';

export const Hello = () => {
  const result = useTracker(() => {
    return LinkCollection.find().fetch();
  })
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    ListsCollection.insert({
      title: counter + 1,
      url: 'https://github.com/jinpengqiong',
    });
    LinkCollection.insert({
      count: counter + 1,
    });
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
