import { connect } from "react-redux";
import ColumnAddItem from "../components/column-add-item/ColumnAddItem";
import { createItem } from "../actions";

const mapDispatchToProps = (dispatch: any) => ({
  createItem: (item: any) => dispatch(createItem(item)),
});

const mapStateToProps = (state: any) => {
  return {
  itemProperties: state.itemProperties,
}};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnAddItem);
