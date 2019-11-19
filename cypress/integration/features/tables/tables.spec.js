describe("tables", () => {
    it("has a navbar with multiple selectors", () => {
      cy.visit("http://10.0.86.94:3000/");
      cy.get("#tables").click()
      cy.contains("South West Division 3 Tables")
      cy.contains("2019/2020")
    });
  });