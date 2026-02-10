import axios from 'axios';

export const processPayment = async (amount) => {
  try {
    const response = await axios.post(
      `${process.env.PYTHON_PAYMENT_SERVICE_URL}/process-payment`,
      { amount }
    );

    return response.data.status;
  } catch (error) {
    console.error('Python service error:', error.message);
    throw error;
  }
};
