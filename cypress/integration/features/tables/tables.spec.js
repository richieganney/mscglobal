describe("tables", () => {
    it("has a navbar with multiple selectors", () => {
      cy.visit("http://127.0.0.1:3000/");
      cy.get("#tables").click()
      cy.contains("South West Division 3 Tables")
      cy.contains("2019/2020")
    });
  });