/**
 * Reducers
 */
const counter = (state = {count : 0} , action ) => {

  // 新規のオブジェクトまたは配列を返却しないとエラーとなる・・・
  // そういう仕様らしい。。。
  let count = state
  switch(action.type) {
    case 'ACTION_INCREMENT':
      return count + action.count;
    case 'ACTION_DECREMENT':
      return count + action.count;
    default:
      return state.count;
  }
}

export default counter;
