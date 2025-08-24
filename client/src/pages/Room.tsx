import React from 'react';
import { useParams } from 'react-router-dom';
import './Room.scss';

const Room: React.FC = () => {
  const { roomId } = useParams();

  return (
    <div className="room">
      <h2>Room: {roomId}</h2>
    </div>
  );
};

export default Room;