import React, { useState, useRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { LinkCollection } from '../db/link';

export const Hello = () => {

  useTracker(() => {
    window.addEventListener('onchange', function (params) {
      console.log('params :>> ', params);
    });
    Meteor.subscribe('link');
    return LinkCollection.find().fetch();
  })
  const [counter, setCounter] = useState(0);
  const inputRef = useRef();
  const increment = () => {
    console.log('inputRef :>> ', inputRef.current);
    // setCounter(counter + 1);
    // Meteor.call('lists.insert', {
    //   title: counter + 1,
    //   url: 'https://github.com/jinpengqiong',
    // });
    // Meteor.call('link.insert', counter + 1);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={increment}>Submit</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
