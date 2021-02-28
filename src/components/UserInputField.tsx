import React, { FunctionComponent } from 'react';
import TextField from "@material-ui/core/TextField"

interface IProps {
  id: string;
  label: string;
  name: string;
  onChange: (e: object, name: string) => void
}

const UserInputField: FunctionComponent<IProps> = ({ id, label, name, onChange }) => (
  <TextField
   variant="outlined" 
   required
   fullWidth
   margin="normal"
   id={id}
   label={label}
   name={name}
   autoFocus
   onChange={(e) => onChange(e, name)}
  />
)

export default UserInputField;