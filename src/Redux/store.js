import { createStore } from 'redux';

const initData = {
login:false,
loginData:{}
};

const reducer = (state = initData, action) => {

if(action.type==='LOGIN'){

return{
login:true,
loginData:action.payload.loginDatastore

}
}
console.log(state, "state from store")
  return state;
};

const store = createStore(reducer);

export default store;