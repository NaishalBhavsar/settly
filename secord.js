const recordSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, index: true },
  amount: { type: Number, required: true },
  referenceNumber: { type: String, required: true, index: true },
  date: { type: Date, required: true },
  uploadJobId: { type: mongoose.Schema.Types.ObjectId, ref: 'UploadJob', index: true },
  isDuplicate: { type: Boolean, default: false }
});
