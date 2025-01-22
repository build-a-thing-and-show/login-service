import axios from 'axios';

export const sendMessageToBroker = async (message: string): Promise<void> => {
    try {
        const response = await axios.post('http://localhost:10000/api/message', { message });
        console.log('Message sent to broker:', response.data);
    } catch (error) {
        console.error('Error sending message to broker:', error);
    }
};