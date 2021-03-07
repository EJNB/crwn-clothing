import React, { useEffect } from "react";
import { Route } from "react-router-dom";
// import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  // fetchCollectionsStart,
  fetchCollectionsSuccessAsync,
} from "../../redux/shop/shop.actions";
// import {
//   selectIsCollectionFetching,
//   selectIsCollectionsLoaded,
// } from "../../redux/shop/shop.selectors";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

// import { updateCollections } from "../../redux/shop/shop.actions";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollecionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionsOverview from "../../components/collections-overview/collections-overview";
// import CollectionPage from "../collection/collection.component";
import CollectionPageContainer from "../collection/collection.container";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, fetchCollectionsSuccessAsync }) => {
  // state = {
  //   loading: true,
  // }

  // unsubscribeFromSnapshot = null;

  // componentDidMount() {
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection("collections");

  //   // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-1623b/databases/(default)/documents/collections')
  //   // .then(response => response.json())
  //   // .then(console.log)
  //   // Based on promise.
  //   collectionRef.get().then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({loading: false})
  //   });
  //   // Based on observable.
  //   // collectionRef.onSnapshot(async (snapshot) => {
  //   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //   updateCollections(collectionsMap);
  //   //   this.setState({loading: false})
  //   // });
  // }

  useEffect(() => {
    fetchCollectionsSuccessAsync();
  }, [fetchCollectionsSuccessAsync]);
  // componentDidMount() {
  //   const { fetchCollectionsSuccessAsync } = this.props;
  //   fetchCollectionsSuccessAsync();
  // }

  // render() {
  // const {
  //   match
  //   // isCollectionFetching,
  //   // isCollectionIsLoaded,
  // } = this.props;
  // const { loading } = this.state;

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollecionsOverviewContainer}
        // render={(props) => (
        //   <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
        // )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
        // render={(props) => (
        //   <CollectionPageWithSpinner isLoading={!isCollectionIsLoaded} {...props} />
        // )}
      />
    </div>
  );
  // }
};

// const mapToStateToProp = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionIsLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsSuccessAsync: () => dispatch(fetchCollectionsSuccessAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

// Rutas anidadas /localhost/shop/jackets
// Rutas anidadas /localhost/shop/hats
// Rutas anidadas /localhost/shop/snikers
