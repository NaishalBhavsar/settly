const reconciliationResultSchema = new mongoose.Schema({
  uploadJobId: { type: mongoose.Schema.Types.ObjectId, ref: 'UploadJob', required: true },
  recordId: { type: mongoose.Schema.Types.ObjectId, ref: 'Record', required: true },
  systemRecord: { type: Object }, // Full system record
  uploadedRecord: { type: Object }, // Uploaded data
  status: { type: String, enum: ['Matched', 'Partially Matched', 'Not Matched', 'Duplicate'], required: true },
  mismatches: { type: [String] }, // Array of mismatched fields
  createdAt: { type: Date, default: Date.now }
});
