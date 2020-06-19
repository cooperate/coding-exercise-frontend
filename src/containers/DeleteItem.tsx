import { connect } from "react-redux";
import ColumnItem from "../components/column-item/ColumnItem";
import { deleteItem } from "../actions";

const mapDispatchToProps = (dispatch: any) => ({
  deleteItem: (item: any) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(ColumnItem);
