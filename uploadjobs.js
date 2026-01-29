const uploadJobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  filename: { type: String, required: true },
  status: { type: String, enum: ['Processing', 'Completed', 'Failed'], default: 'Processing' },
  totalRecords: { type: Number, default: 0 },
  processedRecords: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
