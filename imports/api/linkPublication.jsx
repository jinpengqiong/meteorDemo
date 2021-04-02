import { Meteor } from 'meteor/meteor';
import { LinkCollection } from '../db/link';

Meteor.publish('link', function publishTasks() {
  return LinkCollection.find({ });
});
