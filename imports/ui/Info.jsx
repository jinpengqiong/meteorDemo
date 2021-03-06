import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ListsCollection } from '../db/lists';
import './index.css'

export const Info = () => {
  const lists = useTracker(() => {
    Meteor.subscribe('lists');
    return ListsCollection.find().fetch();
  });
  const handleDelete = (taskId) => {
    Meteor.call('lists.remove', taskId);
  };
  return (
    <div>
      <h2>Learn Meteor</h2>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <a href={list.url} target="_blank">
              {list.title}
            </a>
            &nbsp;&nbsp;
            <span className="deleteIcon" onClick={() => handleDelete(list._id)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
