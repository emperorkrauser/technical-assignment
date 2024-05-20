import { Grid } from '@mui/material';
import { Chatbox } from '../chatbox';
import { Users } from '..';
import styled from '@emotion/styled';

const UserSection = styled(Grid)`
  background: #fefefe;
  height: 100vh;
`;

const ChatboxSection = styled(Grid)`
  width: 100%;
`;

export const Dashboard = () => {
  return (
    <>
      <Grid
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
        container
      >
        <UserSection item xs={6}>
          <Users />
        </UserSection>
        <ChatboxSection item xs={6}>
          <Chatbox />
        </ChatboxSection>
      </Grid>
    </>
  );
};
