import PageDataConstants from "../herokuapp/pages/pages-constants";
import { test } from "../herokuapp/pagefixture";

test.describe.parallel("Form-authentication page tests - Verify page logic", async () => {
  test.beforeEach(async ({ mainPage, baseURL }) => {
    await test.step("Go to Login page", async () => {
      await mainPage.navigateUrl(
        new PageDataConstants(baseURL as string).loginPage.getUrlPath()
      );
      await mainPage.waitForPageLoad();
    });
});

  test("Perform authentication with provided credentials on page", async ({
    loginPage: formAuthenticationPage,
  }) => {
    //Arrange
    const [username, password] =
      await formAuthenticationPage.getUsernameAndPassword();

    //Act
    await formAuthenticationPage.performLoginActions(username, password);

    //Assert
    await formAuthenticationPage.verifyThatUserWasLoggedIn();
  });

});