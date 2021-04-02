import { Meteor } from 'meteor/meteor';
import { LinkCollection } from './link';

Meteor.publish('link', function publishTasks() {
  return LinkCollection.find({ });
});
