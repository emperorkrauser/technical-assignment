import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import UserList from './user-list';

const UserBoxContainer = styled(Box)`
  position: relative;
  height: 100vh;
  border-right: 1px solid #ddd;
`;

const UserBoxHeader = styled(Box)`
  position: relative;
  width: auto;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

export const Users = () => {
  return (
    <UserBoxContainer>
      <UserBoxHeader>
        <Typography variant='h6'>Chat</Typography>
      </UserBoxHeader>
      <UserList />
    </UserBoxContainer>
  );
};
