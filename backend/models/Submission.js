const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
    code: { type: String, required: true },
    language: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Accepted', 'Wrong Answer', 'Runtime Error'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);

