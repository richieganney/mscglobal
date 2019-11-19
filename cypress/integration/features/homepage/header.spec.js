describe("Cypress", () => {
    it("is working", () => {
      expect(true).to.equal(true);
    });
  });
  
  describe("hompage", () => {
    it("shows website header", () => {
      cy.visit("http://10.0.86.94:3000/");
      cy.get("#mscHeader").contains("Here at the"
      );
    });
  });