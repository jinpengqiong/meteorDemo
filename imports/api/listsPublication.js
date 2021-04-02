import { Meteor } from 'meteor/meteor';
import { ListsCollection } from './lists';

Meteor.publish('lists', function publishTasks() {
  return ListsCollection.find({});
});
