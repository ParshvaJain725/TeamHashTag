const mongoose = require('mongoose');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const codeExecutionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  language: { type: String, required: true },
  code: { type: String, required: true },
  input: { type: String },
  output: { type: String },
  executionTime: { type: Number },
  memoryUsage: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

codeExecutionSchema.methods.execute = async function () {
  const codeFilePath = path.join(__dirname, `../temp/${this.id}.cpp`);
  const inputFilePath = path.join(__dirname, `../temp/${this.id}.in`);
  const outputFilePath = path.join(__dirname, `../temp/${this.id}.out`);
  const executablePath = path.join(__dirname, `../temp/${this.id}`);

  
  fs.writeFileSync(codeFilePath, this.code);

  
  if (this.input) {
    fs.writeFileSync(inputFilePath, this.input);
  }

  const start = process.hrtime();

  
  const compileCommand = `g++ ${codeFilePath} -o ${executablePath}`;
  await new Promise((resolve, reject) => {
    exec(compileCommand, (err, stdout, stderr) => {
      if (err) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });

  
  const runCommand = this.input
    ? `${executablePath} < ${inputFilePath} > ${outputFilePath}`
    : `${executablePath} > ${outputFilePath}`;
  
  await new Promise((resolve, reject) => {
    exec(runCommand, (err, stdout, stderr) => {
      if (err) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });

  const elapsedTime = process.hrtime(start);
  this.executionTime = (elapsedTime[0] * 1000 + elapsedTime[1] / 1e6).toFixed(2);

  this.output = fs.readFileSync(outputFilePath, 'utf8');
  this.memoryUsage = (process.memoryUsage().heapUsed / 1024).toFixed(2);

  
  fs.unlinkSync(codeFilePath);
  fs.unlinkSync(inputFilePath);
  fs.unlinkSync(outputFilePath);
  fs.unlinkSync(executablePath);

  return this.save();
};

const CodeExecutionModel = mongoose.model('CodeExecution', codeExecutionSchema);

module.exports = CodeExecutionModel;
