import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';


Meteor.startup(() => {
  LinksCollection.insert({
      id: '1212121212',
      title: '31232131231',
      url: 'baidu'
    });
});
