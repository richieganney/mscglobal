describe("about", () => {
    it("shows you the leadership team", () => {
      cy.visit("http://10.0.86.94:3000/");
      cy.get("#about").click()
      cy.contains("Leadership")
      cy.contains("Meet the team behind the action at the BLC")
    });
  });