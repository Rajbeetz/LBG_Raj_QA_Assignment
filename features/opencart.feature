Feature: Login to wipro Appliaction

    @raj
    Scenario Outline: login with valid id

        Given user login in to opencart application using invalid creditials "<username>" and "<password>"
        When user clicks on submit button
        Then verify the error message and close the browser

        Examples:
            | username          | password|
            | raj.v26@wipro.com | wip1234 |