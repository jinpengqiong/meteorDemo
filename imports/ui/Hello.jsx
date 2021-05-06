import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { LinkCollection } from '../db/link';

export const Hello = () => {
  let search = '';
  useTracker(() => {
    Meteor.subscribe('link');
    return LinkCollection.find().fetch();
  })
  useEffect(() => {
    console.log('window.location.search :>> ', window.location.search);
    search = window.location.search;
  }, [])
  const [counter, setCounter] = useState(0);
  const increment = () => {
    form2.submit();
    console.log('search :>> ', search);
    // console.log('location :>> ', location);
    // setCounter(counter + 1);
    // Meteor.call('lists.insert', {
    //   title: counter + 1,
    //   url: 'https://github.com/jinpengqiong',
    // });
    // Meteor.call('link.insert', counter + 1);
  };
  return (
    <div>
      <form name="form2" action="/">
        <label>Name:</label>
        <input type="text" id="fname" name="content" />
        <br/>
        <br/>
        <input type="button" onClick={increment} value="Submit" />
      </form>
      {/* <button onClick={increment}>Submit</button> */}
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
