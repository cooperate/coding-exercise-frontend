import { connect } from "react-redux";
import Logger from "../components/logger/Logger";

const mapStateToProps = (state: any) => {
  return {
    log: state.logger,
  };
};

export default connect(mapStateToProps)(Logger);
