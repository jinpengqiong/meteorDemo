import { Meteor } from 'meteor/meteor';
import { ListsCollection } from '../db/lists';

Meteor.publish('lists', function publishTasks() {
  return ListsCollection.find({});
});
