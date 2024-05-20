import { Box, Divider, Typography } from '@mui/material';
import { ChatTextArea } from '../forms';
import styled from '@emotion/styled';
import { ChatboxHeader } from './chatbox-header';

const ChatMessageSender = styled.div`
  text-align: left;
  background: rgb(22, 119, 255);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  border: 2px solid #eee;
`;

const ChatMessageReceiver = styled.div`
  text-align: right;
  background: rgb(83, 154, 209);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  border: 2px solid rgb(83, 154, 209);
`;

export const Chatbox = () => {
  return (
    <>
      <ChatboxHeader />
      <Divider />
      <Box sx={{ padding: '15px', maxHeight: '500px', overflowY: 'scroll' }}>
        <ChatMessageSender>
          <Typography variant='h6' textAlign='left'>
            You
          </Typography>
          <Typography variant='body1' textAlign='right'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageSender>
        <ChatMessageReceiver>
          <Typography variant='h6' textAlign='left'>
            Receiver
          </Typography>
          <Typography variant='body1' textAlign='left'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageReceiver>
        <ChatMessageReceiver>
          <Typography variant='h6' textAlign='left'>
            Receiver
          </Typography>
          <Typography variant='body1' textAlign='left'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageReceiver>
        <ChatMessageSender>
          <Typography variant='h6' textAlign='left'>
            You
          </Typography>
          <Typography variant='body1' textAlign='right'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageSender>
        <ChatMessageSender>
          <Typography variant='h6' textAlign='left'>
            You
          </Typography>
          <Typography variant='body1' textAlign='right'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageSender>
        <ChatMessageReceiver>
          <Typography variant='h6' textAlign='left'>
            Receiver
          </Typography>
          <Typography variant='body1' textAlign='left'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageReceiver>
        <ChatMessageReceiver>
          <Typography variant='h6' textAlign='left'>
            Receiver
          </Typography>
          <Typography variant='body1' textAlign='left'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageReceiver>
        <ChatMessageSender>
          <Typography variant='h6' textAlign='left'>
            You
          </Typography>
          <Typography variant='body1' textAlign='right'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            incidunt, asperiores cum rem repudiandae optio a! Culpa ipsa nostrum
            quae autem! Accusamus veritatis qui recusandae iusto rerum doloribus
            beatae neque.
          </Typography>
        </ChatMessageSender>
      </Box>
      <Divider />
      <ChatTextArea />
    </>
  );
};
