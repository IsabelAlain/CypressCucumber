import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given("I have launched the swag labs application", function () {
    cy.visit('https://www.saucedemo.com/v1/index.html')
});

When("I enter the correct username and password", function () {
    const uname_elm = '#user-name'
    const pwd_elm = '#password'

    cy.get(uname_elm).type('standard_user')
    cy.get(pwd_elm).type('secret_sauce')
});

When("I click the login button", function () {
    const login_btn = '#login-button'

    cy.get(login_btn).click()
});

Then("I should land on the products page", function () {
    cy.get('div.product_label').should('have.text', 'Products')
});

When("I enter the incorrect username and password", function () {
    const uname_elm = '#user-name'
    const pwd_elm = '#password'

    cy.get(uname_elm).type('user')
    cy.get(pwd_elm).type('abcd1234')
});

Then("I should get the error message {string}", function (Message) {
    const error_elm = '[data-test="error"]'

    cy.get(error_elm).should('have.text', Message)
});

When("I enter the username as {string}", function (Username) {
    const uname_elm = '#user-name'
    cy.get(uname_elm).type(Username)
});

When("I enter the password as {string}", function (Password) {
    const pwd_elm = '#password'
    cy.get(pwd_elm).type(Password)
});