describe("all teams", () => {
    it("shows you the crests of all the league teams", () => {
      cy.visit("http://10.0.86.94:3000/");
      cy.get("#allTeams").click()
      cy.contains("South West Division 3")
    });
  });