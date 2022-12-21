describe("forms test", () => {
  it("create page renders correctly", () => {
    cy.visit("/create");
    cy.get("#file").should("exist");
    cy.get("#text").should("exist");
    cy.get("button").should("exist");
  });
  it("test picture uploading", () => {
    cy.visit("/create");
    cy.fixture("Mercenary1000.jpg")
      .then((fileContent) => {
        cy.get("#file").attachFile({
          fileContent: fileContent.toString(),
          fileName: "Mercenary1000.jpg",
          mimeType: "image/jpg",
        });
      })
      .then(() => {
        cy.get("#image")
          .should("be.visible")
          .and("have.prop", "naturalWidth")
          .should("be.greaterThan", 0);
      });
  });
});
