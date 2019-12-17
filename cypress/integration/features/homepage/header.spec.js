describe("Cypress", () => {
    it("is working", () => {
      expect(true).to.equal(true);
    });
  });
  
  describe("hompage", () => {
    it("shows website header", () => {
      cy.visit("/");
      cy.get("#mscHeader").contains("Here at the"
      );
    });
  });