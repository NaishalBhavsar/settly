const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const reconciliationRoutes = require('./routes/reconciliation');
const auditRoutes = require('./routes/audit');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/reconciliation', { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/reconciliation', reconciliationRoutes);
app.use('/api/audit', auditRoutes);

io.on('connection', (socket) => {
  // Handle real-time updates
});

server.listen(5000, () => console.log('Server running on port 5000'));
