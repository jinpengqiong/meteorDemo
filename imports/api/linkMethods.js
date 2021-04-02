import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { LinkCollection } from './link';
import { ListsCollection } from './lists';


Meteor.methods({
  'link.insert'(text) {
    // check(text, int);
    // if (!this.userId) {
    //   throw new Meteor.Error('Not authorized.');
    // }
    LinkCollection.insert({
      count: text,
    });
  },
  'lists.insert'(obj) {
    // check(text, int);
    // if (!this.userId) {
    //   throw new Meteor.Error('Not authorized.');
    // }
    ListsCollection.insert(obj);
  },
  'link.remove'(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    LinkCollection.remove(taskId);
  },
});
