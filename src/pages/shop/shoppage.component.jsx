import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsSuccessAsync } from "../../redux/shop/shop.actions";

import CollecionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ match, fetchCollectionsSuccessAsync }) => {
  useEffect(() => {
    fetchCollectionsSuccessAsync();
  }, [fetchCollectionsSuccessAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollecionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsSuccessAsync: () => dispatch(fetchCollectionsSuccessAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

// Rutas anidadas /localhost/shop/jackets
// Rutas anidadas /localhost/shop/hats
// Rutas anidadas /localhost/shop/snikers
