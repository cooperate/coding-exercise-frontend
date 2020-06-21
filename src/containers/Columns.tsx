import {connect} from 'react-redux';
import TransferColumns from '../components/transfer-columns/TransferColumns';

const mapStateToProps = (state: any) => {
    return {
        items: state.items
    };
} 
   
export default connect(mapStateToProps)(TransferColumns);