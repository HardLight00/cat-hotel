const router = require('express').Router();
const feedbackData = require('./feedback.json')
const stepsData = require('./steps.json')

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://89.223.91.151:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/get-feedbacks', (req, res) => {
  res.send(feedbackData);
})

router.get('/get-steps', (req, res) => {
  res.send(stepsData);
})

module.exports = router;

module.exports.feedbackData = feedbackData;
module.exports.stepsData = stepsData;
