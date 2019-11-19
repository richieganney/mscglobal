describe("season highlights", () => {
    it("takes you to a page with multiple videos", () => {
      cy.visit("http://10.0.4.190:3000/");
      cy.get("#seasonHighlights").click()
      cy.get("#sOne").click()
      cy.contains("Some of the magic from the 2018/2019 season")
    });
  });