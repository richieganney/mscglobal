describe("navbar", () => {
    it("has a navbar with multiple selectors", () => {
      cy.visit("http://10.0.4.190:3000/");
      cy.get("#navBar").contains("Tables")
      cy.get("#navBar").contains("Season Highlights")
      cy.get("#navBar").contains("All Teams")
      cy.get("#navBar").contains("About"
      );
    });
  });
