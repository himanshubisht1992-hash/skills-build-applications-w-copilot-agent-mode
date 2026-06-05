import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit';

app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB', MONGO_URI);
    app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
    process.exit(1);
  });
