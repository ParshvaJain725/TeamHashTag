const Problem = require('../models/Problem');

const getProblems = async (req, res) => {
    const problems = await Problem.find();
    res.json(problems);
};

// Other CRUD operations here

module.exports = { getProblems };
