import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';

const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[500],
    '&$checked': {
      color: 'tomato',
    },
    '&$checked + $track': {
      backgroundColor: 'tomato',
    },
  },
  checked: {},
  track: {},
})(Switch);

export const CustomEditSwitch = () => {
  const [edit, setEdit] = useState(false);
  const handleChangeEdit = event => setEdit(event.target.checked);

  return (
    <FormGroup style={{ padding: '0 5px', color: '#3f51b5' }}>
      <FormControlLabel
        control={<PurpleSwitch checked={edit} onChange={handleChangeEdit} name='editMode' />}
        label='EDIT'
      />
    </FormGroup>
  )
}