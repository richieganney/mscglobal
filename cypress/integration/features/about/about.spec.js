describe("about", () => {
    it("shows you the leadership team", () => {
      cy.visit("http://127.0.0.1:3000/");
      cy.get("#about").click()
      cy.contains("Leadership")
      cy.contains("Meet the team behind the action at the BLC")
    });
  });