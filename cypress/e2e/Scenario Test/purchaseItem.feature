Feature: Checkout

    Scenario: Validate that users can place orders on the e-commerce website
            Given I am on the e-commerce website
            When I click on the shop button
            And I add item and initiated payments
            Then I shouldbe able to fill in my details on checkout page.

            

