/**
 *Search for a keyword
 *
 *@param {String} keyword
 *@param {object} inputField WebdriverIO input fi
 *@param {object} submitButton WebdriverIO submit
 */
export default (keyword, inputField, submitButton) => {
    inputField.waitForDisplayed(5000);
    inputField.click();
    inputField.setValue(keyword);
    submitButton.waitForDisplayed(5000);
    submitButton.click();
};