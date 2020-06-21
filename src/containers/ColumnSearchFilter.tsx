import { connect } from "react-redux";
import Column from "../components/column/Column";

const mapStateToProps = (state: any) => {
  return {
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps)(Column);
