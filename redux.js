const redux=require('redux');
const reduxReducer=(state={counter:0},action)=>{
    if(action.type==="increament"){
        let counter=state.counter+2
        return{
            counter:counter
        }
    }
    if(action.type==="decrement"){
        let counter=state.counter-1
        return{
            counter:counter
        }
    }
   
}

const store =redux.legacy_createStore(reduxReducer)
const suscriber=()=>{
    let count=store.getState();
    console.log(count)
}
store.subscribe(suscriber)
store.dispatch({type:"increament"})
store.dispatch({type:"decrement"})