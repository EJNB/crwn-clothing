import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { firestore } from "../../firebase/firebase.utils";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  useEffect(() => {
    console.log("I am subscribing.");
    const unsubscribeFromCollections = firestore
      .collection("collections")
      .onSnapshot((snapshot) => console.log(snapshot));
    return () => {
      console.log("I am unsubscribing");
      unsubscribeFromCollections();
    };
    // Of course pass the empty array to indicate that we only want to use this effect when it mounts but we also want to call this return function when our component unmounts.
  }, []);

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
