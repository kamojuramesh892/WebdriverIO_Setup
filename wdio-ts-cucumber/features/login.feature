Feature: The Internet Guinea Pig Website
  
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

  @123
  Scenario: User opens Google and Searches for Zaggle
    Given I am able to pass the Zaggle URL
    When I Will click on Enter button
    Then verify the URL of zaggle
    Then I should see the Zagglehome page Logo
