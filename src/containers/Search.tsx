import { connect } from "react-redux";
import Search from "../components/search/Search";
import { updateSearchTerm } from "../actions";

const mapDispatchToProps = (dispatch: any) => ({
  updateSearchTerm: (searchTerm: string) => dispatch(updateSearchTerm(searchTerm)),
});

export default connect(null, mapDispatchToProps)(Search);