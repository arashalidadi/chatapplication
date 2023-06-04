import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './component/ChatFeed';

const App = () => {
  return (
   <ChatEngine
   height="100vh"
   projectID="ba2a7cfb-d7cb-4ef9-bde7-ce2dc7d4def1"
   userName="Arasham"
   userSecret="12341234"
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
   />
  )
}

export default App