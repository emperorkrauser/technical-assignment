import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';

const Textarea = styled(TextField)`
  margin: 15px 0;
  width: 100%;
`;

interface ChatTextAreaProps {
  value?: string;
  handleChangeMessage: (value: string) => void;
}

export const ChatTextArea = (props: ChatTextAreaProps) => {
  const { handleChangeMessage, value } = props;
  const [text, setText] = useState(value);

  const handleChangeText = (text: string) => {
    setText(text);
    console.log('handleChangeText', text);
    return handleChangeMessage(text);
  };

  return (
    <Textarea
      fullWidth
      placeholder='Type a message'
      multiline
      rows={4}
      value={text}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        handleChangeText(e.target.value)
      }
    />
  );
};
