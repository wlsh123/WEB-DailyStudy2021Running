export default (state, action)=>{
    console.log("我是reducer，state现在是：", state);
    if(state == undefined){
        state = {"r":0,"g":0,"b":0};
    }
    if(action.type=="CHANGER"){
        console.log("reducer识别到了CHANGER.");
        return {...state, "r":state.r+10};
    }
    return state;
}