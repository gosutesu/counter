import { connect } from 'react-redux';
import DisplayCount from '../components/DisplayCount'

const mapStateToProps = state => {
  return {count: state}
 }

export default connect(mapStateToProps)(DisplayCount);
