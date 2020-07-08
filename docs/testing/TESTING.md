# Testing

I used a combination of [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [Jest](https://jestjs.io/) for writing tests. This is still a work in progress. My goal is to have a full suite of unit and integration tests, as well as some end-to-end testing using a tool like [Cypress](https://www.cypress.io/).

I do not currently have full test coverage, but I tested some of the important authentication functions inside the `auth` folder. And I have tests for the profile, projects, and project pages.

## 🧪 Running the tests

You can run the tests with `npm test`

## 📋 To dos

-   [ ] Create factory functions that create objects with mock data
-   [ ] Mock fetch requests
-   [ ] Add additional integration testing
-   [ ] Get close to full coverage
