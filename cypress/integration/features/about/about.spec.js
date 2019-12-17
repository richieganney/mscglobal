describe("about", () => {
    it("shows you the leadership team", () => {
      cy.visit("/");
      cy.get("#about").click()
      cy.contains("Leadership")
      cy.contains("Meet the team behind the action at the BLC")
    });
  });