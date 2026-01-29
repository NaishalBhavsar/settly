const auditLogSchema = new mongoose.Schema({
  recordId: { type: mongoose.Schema.Types.ObjectId, ref: 'Record' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true }, // e.g., 'Upload', 'Reconcile', 'Manual Correction'
  oldValue: { type: Object },
  newValue: { type: Object },
  timestamp: { type: Date, default: Date.now },
  source: { type: String, required: true } // e.g., 'Upload', 'Manual'
});
// No updates allowed; use pre-save hook to prevent changes.
