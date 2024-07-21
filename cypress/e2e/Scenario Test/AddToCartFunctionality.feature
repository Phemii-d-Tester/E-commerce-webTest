Feature: Validate cart functionality

Scenario: Validate that the cart displays the proper value.
    Given I have verified initial cart value
    When I add an item to cart
    Then I should see the cart value updated.



