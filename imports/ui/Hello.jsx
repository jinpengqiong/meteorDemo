import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ListsCollection } from '../api/lists';
import { LinkCollection } from '../api/link';

export const Hello = () => {

  const result = useTracker(() => {
    Meteor.subscribe('link');
    return LinkCollection.find().fetch();
  })
  console.log('result :>> ', result);
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    // ListsCollection.insert({
    //   title: counter + 1,
    //   url: 'https://github.com/jinpengqiong',
    // });
    // LinkCollection.insert({
    //   count: counter + 1,
    // });
    Meteor.call('lists.insert', {
      title: counter + 1,
      url: 'https://github.com/jinpengqiong',
    });
    Meteor.call('link.insert', counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
