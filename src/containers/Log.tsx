import { connect } from "react-redux";
import Logger from "../components/logger/Logger";

const mapStateToProps = (state: any) => {
  console.log("map state to props with properties", state);
  return {
    log: state.logger,
  };
};

export default connect(mapStateToProps)(Logger);
