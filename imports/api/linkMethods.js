import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { LinkCollection } from '../db/link';
import { ListsCollection } from '../db/lists';


Meteor.methods({
  'link.insert'(text) {
    check(text, Number);
    // if (!this.userId) {
    //   throw new Meteor.Error('Not authorized.');
    // }
    LinkCollection.insert({
      count: text,
    });
  },
  'lists.insert'(obj) {
    check(obj, Object);
    // if (!this.userId) {
    //   throw new Meteor.Error('Not authorized.');
    // }
    ListsCollection.insert(obj);
  },
  'lists.remove'(taskId) {
    check(taskId, String);
    // if (!this.userId) {
    //   throw new Meteor.Error('Not authorized.');
    // }

    ListsCollection.remove(taskId);
  },
  'link.remove'(taskId) {
    check(taskId, String);
    // if (!this.userId) {
    //   throw new Meteor.Error('Not authorized.');
    // }

    LinkCollection.remove(taskId);
  },
});
