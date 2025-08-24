import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const createRoom = () => {
    const roomId = Math.random().toString(36).substr(2, 9);
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="home">
      <h1>ObscurHUB</h1>
      <p>Watch Together</p>
      <button onClick={createRoom}>Create ROOM</button>
    </div>
  );
};

export default Home;