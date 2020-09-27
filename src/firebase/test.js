import firebase from "firebase/app";
import "firebase/firestore";

const firestrore = firebase.firestore();

firestrore
  .collection("users")
  .doc("dfdf")
  .collection("cartItems")
  .doc("dhfdfh");
firestrore.doc("/users/dkjfkdkf/cartItems/dkfkdjf");
firestrore.collection("/users/dfkdjfk/cartItems");
