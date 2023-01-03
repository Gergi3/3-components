import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Timer } from './Timer';
import styles from './Clicker.module.css';

export const Clicker = (props) => {
    const [clicks, setClicks] = useState(0);
    const [message, setMessage] = useState(0);
    const [updatedTimes, setUpdatedTimes] = useState(-1);
    const [colorChange, setColorChange] = useState(false);

    const onIncrement = () => {
        setClicks(x => x + 1)
    }

    const onDecrement = () => {
        if (clicks > 0) {
            setClicks(x => x - 1)
        }
    }

    useEffect(() => {
        setMessage('Created')
    }, [])
    
    useEffect(() => {
        setColorChange(x => !x);
        setUpdatedTimes(x => x + 1);
        setMessage(`Updated times: ${updatedTimes + 1}`);
    }, [clicks])
    
    return (
        <div>
            <h1 className={colorChange ? styles.purple : styles.crimson}>Clicks: {clicks}</h1>
            <Button
                onClick={onIncrement}
                text="Increment"
            />
            <Button
                onClick={onDecrement}
                text="Decrement"
            />
            <h1>{message}</h1>
            { clicks > 10 && <Timer />}
        </div>
    );
}