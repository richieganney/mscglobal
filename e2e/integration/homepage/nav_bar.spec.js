describe("navbar", () => {
    it("has a navbar with multiple selectors", () => {
      cy.visit("/");
      cy.get("#navBar").contains("Tables")
      cy.get("#navBar").contains("Season Highlights")
      cy.get("#navBar").contains("All Teams")
      cy.get("#navBar").contains("About"
      );
    });
  });
