const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // Hashed
  role: { type: String, enum: ['Admin', 'Analyst', 'Viewer'], required: true },
  createdAt: { type: Date, default: Date.now }
});
