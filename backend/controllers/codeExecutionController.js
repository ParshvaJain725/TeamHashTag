const CodeExecutionModel = require('../models/codeExecutionModel');

exports.executeCode = async (req, res) => {
  const { language, code, input } = req.body;

  if (language !== 'cpp') {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  try {
    const codeExecution = new CodeExecutionModel({
      id: uuidv4(),
      language,
      code,
      input,
    });

    const result = await codeExecution.execute();

    res.status(200).json({
      output: result.output,
      executionTime: result.executionTime,
      memoryUsage: result.memoryUsage,
      createdAt: result.createdAt,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
