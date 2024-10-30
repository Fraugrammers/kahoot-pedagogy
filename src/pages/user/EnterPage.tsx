import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { useAddPlayerMutation } from '@/store/api/lobbyApi';
import { useNavigate } from 'react-router-dom';

const EnterPage: React.FC = () => {
    const [code, setCode] = useState<number>(0);
    const [username, setUsername] = useState('');
    const [isUsernameInput, setIsUsernameInput] = useState(false);
    const [addPlayer] = useAddPlayerMutation();
    const navigate = useNavigate();

    const handleLobbyCodeSubmit = () => {
        setIsUsernameInput(true);
    };

    const handleAddPlayer = async () => {
        try {   
            console.log(code);
            await addPlayer({ lobbyCode: code, username }).unwrap();
            localStorage.setItem('frogit-username', username);
            navigate('/');
        } catch (error) {
            console.error('Failed to add player:', error);
        }
    };

    return (
        <div className='container mx-auto flex flex-col items-center justify-center w-screen h-screen'>
            {isUsernameInput ? (
                <>
                    <input
                        type='text'
                        placeholder='Enter your username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='mb-4 p-2 border border-gray-300 rounded'
                    />
                    <Button color='success' onClick={handleAddPlayer}>
                        Join Lobby
                    </Button>
                </>
            ) : (
                <>
                    <input
                        type='text'
                        placeholder='Enter lobby code'
                        value={code}
                        onChange={(e) => setCode(Number(e.target.value))}
                        className='mb-4 p-2 border border-gray-300 rounded'
                    />
                    <Button color='success' onClick={handleLobbyCodeSubmit}>
                        Enter
                    </Button>
                </>
            )}
        </div>
    );
};

export default EnterPage;