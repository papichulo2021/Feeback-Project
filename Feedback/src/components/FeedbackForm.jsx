import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    
    const handleTextChange = (e) => {
        const inputText = e.target.value;

        if (inputText === '') {
            setBtnDisabled(true);
            setMessage(''); // Clear the message when input is empty
        } else if (inputText.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(''); // Clear the message when input is valid
            setBtnDisabled(false);
        }

        setText(inputText);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate your services with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button 
                        type="submit"
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
