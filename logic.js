// API to trigger reconciliation
router.post('/:jobId', authenticate, authorize(['Admin', 'Analyst']), async (req, res) => {
  const worker = new Worker('./workers/reconciliationWorker.js', { workerData: { jobId: req.params.jobId, userId: req.user.id } });
  worker.on('message', (msg) => io.emit('reconciliationProgress', msg));
  res.json({ status: 'Processing' });
});

// Worker: Fetch uploaded records, match against system records, compute status, store results, audit.
// Logic: For each uploaded record, query system by Transaction ID/Ref, apply rules.
