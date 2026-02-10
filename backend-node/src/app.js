import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import userRoutes from './routes/user.routes.js';
import cardRoutes from './routes/card.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';


dotenv.config();

const app = express();
app.use(express.json());

app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({
      status: 'OK',
      services: {
        api: 'running',
        database: 'connected'
      }
    });
  } catch {
    res.status(500).json({
      status: 'ERROR',
      services: {
        api: 'running',
        database: 'disconnected'
      }
    });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`API running on port ${PORT}`);
});

app.use('/users', userRoutes);
app.use('/cards', cardRoutes);
app.use('/payments', paymentRoutes);

app.use(errorHandler);
