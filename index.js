const redux = require ('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = "BUY-CAKE"
const BUY_ICECREME = "BUY-ICECREME"

function buycake(){
    return {
    type : BUY_CAKE,
    info : 'first redux action'
}
}

function buyIce(){
    return{
        type : BUY_ICECREME,
        info : 'secound redux action'
    }
}

const initialStateForCake = {
    numberOfCakes: 10
};

const initialStateForIceCreme = {
    numberOfIces: 20
}

const cakereducer = (state = initialStateForCake, action ) => {
        
        switch(action.type){
            case BUY_CAKE :
                return{
                    ...state,
                    numberOfCakes : state.numberOfCakes - 1
                }
                default : return state

        }
}


const icereducer = (state = initialStateForIceCreme, action ) => {
        
        switch(action.type){
            case BUY_CAKE :
                return{
                    ...state,
                    numberOfIces : state.numberOfIces - 1
                }
                default : return state

        }
}

const rootReducer = combineReducer(
    {
        cake : cakereducer,
        iceCream : icereducer
    }
)
const store = createStore(rootReducer)


console.log('initialstate', store.getState())
const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIce())

unsubscribe()