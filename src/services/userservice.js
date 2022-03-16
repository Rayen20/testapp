import firebase from "/home/cartesiam/Documents/test/testapp/src/firebase.js";
const db = firebase.ref("/users");
class userservice {
  getAll() {
    return db;
  }
  create(user) {
    return db.push(user);
  }
  update(key, value) {
    return db.child(key).update(value);
  }
  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}
export default new userservice();