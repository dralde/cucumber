Feature: Sign up form
  As a user, I'd like to sign up to an app
  Scenario: Fill in sign up form
    Given Wait for element: "first name input"
    When Click element: "submit button"
    Then Wait for complete: "completed screen"


