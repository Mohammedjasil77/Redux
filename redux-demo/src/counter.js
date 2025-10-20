import { combineReducers, createStore }  from 'redux'

const initialStateForCake = {
  numberOfCakes : 10
}

function buyCake(state = initialStateForCake , action) {
  if(action.type === 'BUY_CAKE'){
    return {
      ...state,
      numberOfCakes : state.numberOfCakes - 1

    };

  }
  return state;
}

const initialStateForIceCreams = {
   numberOfIceCreams : 20
}

function buyIceCreams(state = initialStateForIceCreams , action){
  if(action.type === 'BUY_ICECREAMS'){
    return{
      ...state,
      numberOfIceCreams : state.numberOfIceCreams - 1
    };
  }
  return state;
}


const rootReducer = combineReducers({
  cake : buyCake,
  iceCreams : buyIceCreams,
});


const store = createStore(rootReducer);

console.log("initial state", store.getState()) ;
const unsubcribe = store.subscribe(()=> console.log('updated state:', store.getState()));

store.dispatch({type : 'BUY_CAKE' })
store.dispatch({type : 'BUY_ICECREAMS' });


unsubcribe();