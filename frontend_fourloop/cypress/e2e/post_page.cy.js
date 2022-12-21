describe("post page", () => {
  it("post page render correctly", () => {
    cy.visit("/post");
    cy.get("#comment-form").should("exist");
    cy.get("#comment-text").should("exist");
    cy.get("button").should("exist");
  });
  it("comment shows after submit", () => {
    cy.visit("/post");
    cy.get("#comment-text").type("Hello World!");
    cy.get("form").submit();
    cy.get("#description").should("exist");
  });
});
