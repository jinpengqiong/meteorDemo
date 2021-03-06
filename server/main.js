import { Meteor } from 'meteor/meteor';
import { ListsCollection } from '/imports/db/lists';
import { LinkCollection } from '/imports/db/link';
import '/imports/api/linkPublication';
import '/imports/api/listsPublication';
import '/imports/api/linkMethods'


Meteor.startup(() => {
  if (ListsCollection.find().count() === 0 || LinkCollection.find().count() === 0) {
    ListsCollection.insert({
      id: '1212121212',
      title: '31232131231',
      url: 'baidu',
    });
    LinkCollection.insert({
      count: 0,
    });
  }
});
