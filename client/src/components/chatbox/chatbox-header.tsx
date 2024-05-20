import { Typography, Box } from '@mui/material';
import styled from '@emotion/styled';

const ChatboxHeaderContainer = styled(Box)`
  position: relative;
  padding: 15px;
  margin: 0;
`;

export const ChatboxHeader = () => {
  return (
    <>
      <ChatboxHeaderContainer>
        <Typography variant='h6' textAlign='left'>
          Chat mate name
        </Typography>
      </ChatboxHeaderContainer>
    </>
  );
};
