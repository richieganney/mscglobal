describe("all teams", () => {
    it("shows you the crests of all the league teams", () => {
      cy.visit("http://127.0.0.1:3000/");
      cy.get("#allTeams").click()
      cy.contains("South West Division 3")
    });
  });