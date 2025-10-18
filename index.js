const BUY_CAKE = "BUY-CAKE"



function buycake(){
    return
    {
    type : BUY_CAKE;
    info : 'first redux action'
}
}


const initialState = {
    numberOfCakes: 10
};

const reducer = (state = initialState, action ) => {
        
        switch(action.type){
            case BUY_CAKE :
                return{
                    ...state,
                    numberOfCakes : state.numberOfCakes - 1

                }
                default : return state

        }
}