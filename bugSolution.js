```javascript
// Ensure the name field is indexed correctly to support case-insensitive searches.
db.collection('users').createIndex( { name: 'text' } );

const query = { $text: { $search: "John" } }; // Using $text operator

const cursor = db.collection('users').find(query);

cursor.forEach((user) => {
  console.log(user);
});
```