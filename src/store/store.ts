import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/combine';

export const store = createStore(
    reducers, 
    {},
    composeWithDevTools(
        applyMiddleware(thunk)
        // other store enhancers if any
      )
)  
;