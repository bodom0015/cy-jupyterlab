import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = (theme: any) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SelectedPanel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  
  render() {
  const selected = this.props.selected;
    let type = "";
  if (selected.interaction) {
    type = "Edge";
  }
  else {
    type = "Node";
  }
  if (!selected.name) {
    type = "undefined";
  }
  return (
    <div>
      <h3>SELECTION</h3>
      <List component="nav">
        <ListItem button>
          <ListItemText primary={"TYPE: " + type} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"NAME: " + selected.name} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"ID: " + selected.id} />
        </ListItem>
      </List>
    </div>
  );
  }
}

export default withStyles(styles)(SelectedPanel);