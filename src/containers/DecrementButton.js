import { connect } from 'react-redux'
import {decrement} from '../actions'
import CounterButton from '../components/CounterButton'

//Stateの紐付けがないとなぜかエラーとなる
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(decrement),
  name: "decrement"  //場所いまいち課題
})

export default connect(mapStateToProps,mapDispatchToProps)(CounterButton);
