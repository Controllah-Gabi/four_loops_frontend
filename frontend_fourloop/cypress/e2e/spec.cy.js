describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#face").should("exist");
    cy.get("#logo").should("exist");
  });
  it("click all links", () => {
    cy.visit("/");

    // create page
    cy.contains("Create").click();
    cy.location("pathname").should("eq", "/create");
    cy.go("back");

    // profile page
    cy.contains("Profile").click();
    cy.location("pathname").should("eq", "/profile");
    cy.go("back");

    // contact page
    cy.contains("Post").click();
    cy.location("pathname").should("eq", "/post");
    cy.go("back");

    // code page
    cy.contains("Code").click();
    cy.location("pathname").should("eq", "/code");
    cy.go("back");

    //blog page
    cy.contains("Blog").click();
    cy.location("pathname").should("eq", "/blog");
    cy.go("back");
    // returns to the home page
    cy.location("pathname").should("eq", "/");
  });
});
