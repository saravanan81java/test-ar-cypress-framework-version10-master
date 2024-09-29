Feature: Login page

  Scenario: Login Happy path
    Given Open the application
    When click the accept cookie button
    And I click the Login link
    And Enter username and password
    And I click the Login button
