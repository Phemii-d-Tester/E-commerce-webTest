Feature: Remove item

Scenario: Verify how the cart performs when item is added and removed.
  Given I have verified initial cart value
  When I add an item to cart
  Then I should see the cart value updated.
  When I remove an item from the cart
  Then I should see the updated cart value become 0


