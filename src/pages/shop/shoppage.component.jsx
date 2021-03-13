import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  /**
   * We know that our shop page will only re-render:
   * 1. if either our props change or
   * 2. if we call setState inside, if we use the useState hook or
   * 3. if the parent of this component which is our App.js ends up calling its own re-render
   *     and the only time we know that will happen is if current user updates.
   *
   * Now if we do not listen for that kind of change, we will actually end up calling useEffect twice.
   */
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

// Rutas anidadas /localhost/shop/jackets
// Rutas anidadas /localhost/shop/hats
// Rutas anidadas /localhost/shop/snikers
