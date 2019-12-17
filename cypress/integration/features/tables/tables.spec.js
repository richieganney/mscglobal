describe("tables", () => {
    it("has a navbar with multiple selectors", () => {
      cy.visit("/");
      cy.get("#tables").click()
      cy.contains("South West Division 3 Tables")
      cy.contains("2019/2020")
    });
  });