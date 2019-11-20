describe("navbar", () => {
    it("has a navbar with multiple selectors", () => {
      cy.visit("http://127.0.0.1:3000/");
      cy.get("#navBar").contains("Tables")
      cy.get("#navBar").contains("Season Highlights")
      cy.get("#navBar").contains("All Teams")
      cy.get("#navBar").contains("About"
      );
    });
  });
