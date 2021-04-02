import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ListsCollection } from '../api/lists';

export const Info = () => {
  const lists = useTracker(() => {
    Meteor.subscribe('lists');
    return ListsCollection.find().fetch();
  });
  console.log('lists :>> ', lists);
  return (
    <div>
      <h2>Learn Meteor</h2>
      <ul>{lists.map(
        list => <li key={list._id}>
          <a href={list.url} target="_blank">{list.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
