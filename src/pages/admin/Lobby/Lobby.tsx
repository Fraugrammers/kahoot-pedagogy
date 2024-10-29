import React from 'react';
import { Button } from 'flowbite-react';

const Lobby: React.FC = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center w-screen h-screen'>
            <h2 className='text-lg font-bold mb-4'>Lobby №1</h2>
            <div className='w-full'>
                <ul>
                    <li>Player name</li>
                    <li>Player name</li>
                </ul>
            </div>
        </div>
    );
};

export default Lobby;