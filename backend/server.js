const express = require('express');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const problemRoutes = require('./routes/problemRoutes.js');
const submissionRoutes = require('./routes/submissionRoutes.js');
const codeExecutionRoute = require('./routes/codeExecutionRoute.js');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/submissions', submissionRoutes);

app.use('/api/', codeExecutionRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

