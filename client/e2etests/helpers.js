
const submitMessage = (message) => {
  browser.element('#inputField').setValue(message);
  browser.click('.submit-button');
}

const upVote = () => {
  browser.click('#voting :nth-child(1)');
}

const downVote = () => {
  browser.click('#voting :nth-child(2)');
}

const getPointsOfAwesomness = () => {
  return browser.element('.messages_board div:nth-child(3) div:nth-child(3)').getText();
}

module.exports = {
  submitMessage: submitMessage,
  upVote:upVote,
  downVote:downVote,
  getPointsOfAwesomness, getPointsOfAwesomness,
}
