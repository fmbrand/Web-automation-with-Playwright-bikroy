Feature: Search in Playwright Site

  Scenario: User searches for docs
    Given I launch the Playwright site
    When I search for "Assertions"
    Then I should see results
