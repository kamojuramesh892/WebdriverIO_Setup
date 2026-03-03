Feature: The Utilities

  @12
  Scenario Outline: Creation of Store with only Store details for different Clients
    Given I am on the zaggle login page
    When I Will enter Username "<username>" and password "<password>" and click on login
    And I will click on Admin and Stores tab
    And I will click on Add store button
    And I will Enter only store fields and submit the store
    Then Store should be successfully created

    Examples:
      | username                     | password    |
      | newpettycashonly@pcash.com   | Testing@111 |
      | newutilitiesonly@utility.com | Testing@111 |
      | pettycashandutilities@pu.com | Testing@111 |

  @123
  Scenario Outline: Creation of Store with different configurations
    Given I am on the zaggle login page
    When I Will enter Username "<username>" and password "<password>" and click on login
    And I will click on Admin and Stores tab
    And I will click on Add store button
    And I will Enter required fields and submit the store with "<configType>"
    Then Store should be successfully created

    Examples:
      | configType          | username                     | password    |
      | PettyCashOnly       | newpettycashonly@pcash.com   | Testing@111 |
      | UtilitiesOnly       | newutilitiesonly@utility.com | Testing@111 |
      | PettyCashAndUtility | pettycashandutilities@pu.com | Testing@111 |

  @1234
  Scenario Outline: bulk upload with different configurations
    Given I am on the zaggle login page
    When I Will enter Username "<username>" and password "<password>" and click on login
    And I will click on Admin and Stores tab
    And I will click on Add Bulk store button
    Then I will sucessfully upload template for "<configType>"

    Examples:
      | configType               | username                     | password    |
      | StoreOnly                | newpettycashonly@pcash.com   | Testing@111 |
      | StoreAndPettyCashOnly    | newpettycashonly@pcash.com   | Testing@111 |
      | StoreAndUtilitiesOnly    | newutilitiesonly@utility.com | Testing@111 |
      | StorePettyCashAndUtility | pettycashandutilities@pu.com | Testing@111 |
