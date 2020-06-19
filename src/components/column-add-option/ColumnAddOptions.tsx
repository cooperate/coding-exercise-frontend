import React, {useState, useEffect} from "react";
import ColumnSelector from "../column-selector/ColumnSelector";
import Grid from "@material-ui/core/Grid";
import EnterOption from '../enter-option/EnterOption';
import { connect } from 'react-redux'
import { updateItemProperties } from '../../actions'

const ColumnAddOptions = (props: any) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [column, setColumn] = useState(1);
  const {updateItemProperties} = props;
  useEffect(()=>{
    console.log('title', title);
    console.log('title', message);
    console.log('title', column);
    updateItemProperties({
      title,
      message, 
      column
    });
  },[title, message, column]);
  return (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <EnterOption setValue={setTitle} label="ENTER ITEM TITLE" />
    </Grid>
    <Grid item xs={12}>
      <EnterOption setValue={setMessage} label="ENTER ITEM MESSAGE"/>
    </Grid>
    <Grid item xs={12}>
      <ColumnSelector setColumn={setColumn} items={["one", "two"]} />
    </Grid>
  </Grid>
);
}


const mapDispatchToProps = (dispatch: any) => ({
  updateItemProperties: (itemProperties: any) => dispatch(updateItemProperties(itemProperties))
})

export default connect(
  null,
  mapDispatchToProps
)(ColumnAddOptions)

