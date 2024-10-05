describe('TS_05_Logout_Functionality_Validation', () => {
  beforeEach(() => {
    // Step 1: Access dashboard page
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    cy.wait(500);
    cy.get('svg[width="45"][height="46"]').click();
    cy.contains('a', 'Masuk').click();
    cy.get('input[name="phone"]').type('0813207334442');
    cy.get('input[name="password"]').type('A@123456');
    cy.contains('button', 'Masuk').click();
  });

  // Test Case 10: TC_10_Logout Successful
  it('TC_10_Logout Successful', () => {
    // Step 2: Hover on the "Profile" icon and click "Keluar"
    cy.wait(1000);
    cy.get('div#search-all-product svg').eq(2).trigger('mouseover');
    cy.contains('p', 'Keluar').click();

    // Assertion: Check if success login and redirect to dashboard page
    cy.wait(500);
    cy.get('svg[width="45"][height="46"]').click();
    cy.contains('p', 'Selamat datang di Beyondly!').should('be.visible');
  });
});