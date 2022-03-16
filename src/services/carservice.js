import firebase from "/home/cartesiam/Documents/test/testapp/src/firebase.js";
const db = firebase.ref("/cars");
class carservice {

  //list cars
  getAll() {
    return db;
  }
  //create car
  create(car) {
    return db.push(car);
  }
  // update car
  update(key, value) {
    return db.child(key).update(value);
  }
  // delete car
  delete(key) {
    return db.child(key).remove();
  }
 
}
export default new carservice();