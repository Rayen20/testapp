import firebase from "/home/cartesiam/Documents/test/testapp/src/firebase.js";
const db = firebase.ref("/cars");
class carservice {
  getAll() {
    return db;
  }
  create(car) {
    return db.push(car);
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
export default new carservice();