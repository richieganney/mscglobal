describe("Cypress", () => {
    it("is working", () => {
      expect(true).to.equal(true);
    });
  });
  
  describe("hompage", () => {
    it("shows website header", () => {
      cy.visit("localhost:3000");
      cy.contains("MSC South West Division 3"
      );
    });
  });