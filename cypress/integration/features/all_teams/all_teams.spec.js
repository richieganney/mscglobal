describe("all teams", () => {
    it("shows you the crests of all the league teams", () => {
      cy.visit("/");
      cy.get("#allTeams").click()
      cy.contains("South West Division 3")
    });
  });