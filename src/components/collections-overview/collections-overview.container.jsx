import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'

import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollecionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

/**
 * compose(connect(mapStateToProps),WithSpinner)(CollectionOverview) <=> connect(mapStateToProps)(WithSpinner(CollectionOverview))
 */
export default CollecionsOverviewContainer
