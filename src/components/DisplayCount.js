/**
 * Presentational Components
 *
 */
import React from 'react'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
const DisplayCount = (props) => (
  <div>
  <Badge
     badgeContent={props.count}
     primary={true}
   >
     <NotificationsIcon />
   </Badge>
  </div>
)

export default DisplayCount;
