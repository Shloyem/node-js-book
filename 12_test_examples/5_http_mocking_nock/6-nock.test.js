// its hard to "fake" a real http server because of protocol complexities.
// nock - a library to test http calls.
// nocks can catch http requests before called online, 
// and return a response as if it came from a real server

// We'd like to check 2 scenarios - code 200 and body response if successful
// or throws error if not

const nock = require('nock');
const assert = require('assert');

describe('nock demo', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should return the number of stars from github', async () => {
    // Arrange
    const { getElementorRepoStarCount } = require('./github');
    const expected = 123456;
    nock('https://api.github.com')
      .get('/repos/elementor/elementor')
      .reply(200, {
        stargazers_count: expected
      });
    // Act
    const actual = await getElementorRepoStarCount();
    // Assert
    assert.strictEqual(actual, expected);
  });

  it('should throw an error on status other than 2xx', async () => {
    // Arrange
    const { getElementorRepoStarCount } = require('./github');
    nock('https://api.github.com')
      .get('/repos/elementor/elementor')
      .reply(408); // Request Timeout
    // Act
    const actual = getElementorRepoStarCount();
    // Assert
    await assert.rejects(actual);
  });
});

// notes:
// 1. nock will work with every http library, because it "wears itself" on top of node.js standard http module.
// 2. like sinon, its important to revert after each test with nock.clearAll in afterEach.
// But unlike sinon, every mock lasts for 1 call. Next call will be a real one
// Still better clearAll in case there another failure before the call and it accidentally affects the next call.