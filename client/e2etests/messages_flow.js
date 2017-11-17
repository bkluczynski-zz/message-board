const expect = require('chai').expect;
const db = require('../../queries');
const helper = require('./helpers');


describe('Message App', () => {
  let message;
  let thumbs;

  beforeEach(() => {
    db.createDatabase()
    browser.url('http://localhost:3000/');
    message = 'Just a random message';
  })

  afterEach(() => {
    db.dropDatabase()
  })

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Board of messages');
  });

  it('Should allow me to create a message', () => {
    helper.submitMessage(message);
    const actual = browser.element('.messages_board div[style*="padding-bottom"]').getText();
    expect(actual).to.eql(message);
  });

  it('Should allow any user to upVote any message and see the counter being increased', () => {
    thumbs = 'Thumb awesomness: 1';
    helper.submitMessage(message);
    helper.upVote();
    const actual = helper.getPointsOfAwesomness();
    expect(actual).to.eql(thumbs);
  });

  it('Should allow any user to downVote any message and see the counter being decreased', () => {
    thumbs = 'Thumb awesomness: -1';
    helper.submitMessage(message);
    helper.downVote();
    const actual = helper.getPointsOfAwesomness();
    expect(actual).to.eql(thumbs);
  });



});
