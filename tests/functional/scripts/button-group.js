module.exports = {
  'Change skill color test' : function (browser) {
    browser
      .url('https://simple-toolchain-20171017122503573.mybluemix.net/form.html')
      .click('.btn-group:nth-of-type(1) .btn:nth-of-type(5)')
      .assert.cssClassPresent(".btn-group:nth-of-type(1) .btn:nth-of-type(5)", "bg-warning");
  }
};
