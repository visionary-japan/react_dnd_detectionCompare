import { useState } from 'react';
import viteLogo from '/vite.svg';
import './Defaults.css';
import reactLogo from './assets/react.svg';

export function Defaults() {
    const [count, setCount] = useState<number>(0);

    const handleClickButton = () => {
        setCount(count => count + 1);
    };

    return (
        <>
            <div id='head'>
                <div className='logo-wrap'>
                    <a
                        href='https://vitejs.dev'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='dummy' />
                        <img src={viteLogo} className='logo' alt='Vite logo' />
                    </a>
                </div>
                <div className='logo-wrap'>
                    <a
                        href='https://react.dev'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='dummy' />
                        <img
                            src={reactLogo}
                            className='logo react'
                            alt='React logo'
                        />
                    </a>
                </div>
            </div>
            <h1>Vite + React</h1>
            <div className='card'>
                <button type='button' onClick={handleClickButton}>
                    count is {count}
                </button>
            </div>
        </>
    );
}
