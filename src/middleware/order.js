export default {
  update: (req, res, next) => {
    const { itemId, step } = req.body;

    if (!itemId || itemId === null || itemId === '') {
      return res.status(500).json({
        message: 'Item id must be specified.',
      });
    }
    if (!step || step === null || step === '') {
      return res.status(500).json({
        message: 'Step must be specified.',
      });
    }
    next();
  },
};
