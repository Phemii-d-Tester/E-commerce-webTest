Feature: Validate cart functionality

Scenario: Validate that the cart displays the proper value.
    Given I have verified initial cart value
    When I add an item to cart
    Then I should see the cart value updated.


   Scenario: Validate the cart functionality when item is removed.
        Given I launched the e-commerce app again  
        Given I verified the initial price on the cart
        And I added and Item to the cart
        Then I should see the updated cart value
        When I remove the item again from the cart
        Then The cart should display the right value


