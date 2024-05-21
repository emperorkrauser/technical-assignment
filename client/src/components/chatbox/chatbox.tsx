import { Box, Divider, Typography, Button } from '@mui/material';
import { ChatTextArea } from '../forms';
import styled from '@emotion/styled';
import { ChatboxHeader } from './chatbox-header';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const URL = import.meta.env.VITE_SOCKET_SERVER;

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

const TextareaContainer = styled(Box)`
  position: relative;
  width: auto;
  padding: 15px;
`;

export const Chatbox = () => {
  const [messageSent, setMessageSent] = useState('');
  const [room, setRoom] = useState('');
  const [messageReceived, setMessageReceived] = useState('');
  const socket = io(URL);

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  const handleChangeMessage = (text: string) => {
    setMessageSent(text);
  };

  useEffect(() => {
    console.log('messageSent', messageSent);
  }, [messageSent]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('received message', data.message);
      setMessageReceived(data.message);
    });
  }, []);

  const handleSendMessage = () => {
    console.log('send_message', messageSent);
    socket.emit('send_message', messageSent);
    setMessageSent('');
  };

  return (
    <>
      <ChatboxHeader />
      <input
        placeholder='Room Number...'
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <Button onClick={joinRoom}> Join Room</Button>
      <Divider />
      <Box sx={{ padding: '15px', maxHeight: '400px', overflowY: 'scroll' }}>
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
        <ChatMessageReceiver>
          <Typography variant='h6' textAlign='left'>
            Receiver
          </Typography>
          <Typography variant='body1' textAlign='left'>
            {messageReceived}
          </Typography>
        </ChatMessageReceiver>
      </Box>
      <Divider />
      <TextareaContainer>
        <form onSubmit={handleSendMessage}>
          <ChatTextArea
            handleChangeMessage={handleChangeMessage}
            value={messageSent}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button onClick={handleSendMessage} variant='outlined'>
              Send
            </Button>
          </Box>
        </form>
      </TextareaContainer>
    </>
  );
};
