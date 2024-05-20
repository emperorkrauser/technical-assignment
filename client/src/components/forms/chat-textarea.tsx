import { TextField } from '@mui/material';
import styled from '@emotion/styled';

const Textarea = styled(TextField)`
  margin: 15px 0;
  width: 95%;
`;

export const ChatTextArea = () => {
  return (
    <Textarea
      fullWidth
      placeholder='Type a message'
      multiline
      rows={2}
      maxRows={4}
    />
  );
};
