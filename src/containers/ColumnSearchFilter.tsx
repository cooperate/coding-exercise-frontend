import { connect } from "react-redux";
import Column from "../components/column/Column";

const mapStateToProps = (state: any) => {
  console.log("map state to props with properties", state);
  return {
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps)(Column);
