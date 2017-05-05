import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
/* FIXME(router):
import { createStoreWithRouter, initializeCurrentLocation } from 'redux-little-router'
*/
import thunkMiddleware from 'redux-thunk'
// import router from './router'
// import search from './search'
import user from './user'
// import seen from './seen'
// import tvshows from './tvshows'
// import results from './results'
// import episodes from './episodes'
import note from './note'
import vault from './vault'
import introduction from './introduction'

const store = createStore(
  combineReducers({
    note,
    // search,
    user,
    introduction,
    vault,
    // seen,
    // tvshows,
    // results,
    // episodes,
    // router, // FIXME(router): delete this
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    // FIXME(router): createStoreWithRouter({
    //  routes: router,
    //  pathname: window.location.pathname,
    // }),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

/* FIXME(router): const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}
*/

export default store
