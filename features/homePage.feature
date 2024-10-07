Feature: Verify home page

  Scenario: Verify home page component
    Given I navigate to "http://localhost:3008"
    When the page loads
    Then the title should be "Product Management"
    And the input "product-name" should be present
    And the input "product-price" should be present
    And the button "Add Product" should be present
