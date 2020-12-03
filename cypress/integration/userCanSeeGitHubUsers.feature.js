describe('User can search for GitHub users', () => {
  before(() = {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/search/users",
      response: "fixture:example_barack.json",
    });
  });

  it('user can see a search field and ', () => {
    cy.visit("/")
    cy.get('[cy-data=search-field]').within(() => {
      cy.contains("barack");
    });
  });
});