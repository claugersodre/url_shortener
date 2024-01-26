import React from 'react';
import Button from 'react-bootstrap/Button';
const Buttons = ({  onClick ,message, disabled}) => {
    return (
        <Button onClick={onClick} variant="primary" disabled={disabled}>{message}</Button>
    )
}
export default Buttons