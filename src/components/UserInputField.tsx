import React, { FunctionComponent } from 'react';
import TextField from "@material-ui/core/TextField"

interface IProps {
  id: string;
  label: string;
  name: string;
  onChange: (e: object, name: string) => void;
  error?: boolean | null;
}

const UserInputField: FunctionComponent<IProps> = ({ id, label, name, onChange, error }) => (
  <TextField
   error={error}
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