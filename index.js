const redux = require ('redux')
const createStore = redux.createStore

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

const initialState = {
    numberOfCakes: 10,
    numberOfIces: 10
};

const reducer = (state = initialState, action ) => {
        
        switch(action.type){
            case BUY_CAKE :
                return{
                    ...state,
                    numberOfCakes : state.numberOfCakes - 1
                } 
                case BUY_ICECREME : 
                return {
                    ...state,
                    numberOfIces : state.numberOfIces - 1 
                }

                
                default : return state

        }
}

const store = createStore(reducer)


console.log('initialstate', store.getState())
const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIce())

unsubscribe()