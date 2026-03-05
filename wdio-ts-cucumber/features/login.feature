Feature: The Utilities

  @1
  Scenario Outline: Creation of Store with required fields only for different Clients
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
  
  @2
  Scenario Outline: Create a Store with all fields Required and Optional
    Given I am on the zaggle login page
    When I Will enter Username "<username>" and password "<password>" and click on login
    And I will click on Admin and Stores tab
    And I will click on Add store button
    And I will Enter all store fields and submit the store
    Then Store should be successfully created

    Examples:
      | username                     | password    |
      | newpettycashonly@pcash.com   | Testing@111 |
      | newutilitiesonly@utility.com | Testing@111 |
      | pettycashandutilities@pu.com | Testing@111 |

  @3
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

  @4
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

  @5
  Scenario Outline: Update existing store deatils
    Given I am on the zaggle login page
    When I Will enter Username "<username>" and password "<password>" and click on login
    And I will click on Admin and Stores tab
    And I will search for existing store and clicks on edit button
    When I will update the store details
    Then I should be able to save Updated details successfully

    Examples:
      | username                     | password    |
      | newpettycashonly@pcash.com   | Testing@111 |
      | newutilitiesonly@utility.com | Testing@111 |
      | pettycashandutilities@pu.com | Testing@111 |




  # Mobile scenario

  # @1
  # Scenario: Creation of Store with required fields only for different Clients
  #   Given app is launched and click on continue button

 