import express from 'express';
import bodyParser from 'body-parser';
import projectsRoutes from './routes/projects.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/projects', projectsRoutes);

app.get('/', (req, res) => {
    console.log('[TEST!]');
    res.send('Hello from homepage.');
});
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});