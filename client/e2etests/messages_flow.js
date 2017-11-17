const expect = require('chai').expect;
const db = require('../../queries');

describe('Message App', () => {

  beforeEach(() => {
    db.createDatabase()
  })

  afterEach(() => {
    db.dropDatabase()
  })

  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Board of messages');
  });

  it('Should allow me to create a message', () => {
    const message = 'This is a very interesting message';
    browser.url('http://localhost:3000/');
    browser.element('#inputField').setValue(message);
    browser.click('.submit-button');
    const actual = browser.element('.messages_board div[style*="padding-bottom"]').getText();
    expect(actual).to.eql(message)
  })





});