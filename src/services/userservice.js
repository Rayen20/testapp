import firebase from "/home/cartesiam/Documents/test/testapp/src/firebase.js";
const db = firebase.ref("/users");
class userservice {

  // list users
  getAll() {
    return db;
  }
  // create new user
  create(user) {
    return db.push(user);
  }
  //update user
  update(key, value) {
    return db.child(key).update(value);
  }
  // delete user
  delete(key) {
    return db.child(key).remove();
  }
 
}
export default new userservice();