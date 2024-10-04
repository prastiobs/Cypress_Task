describe('TS_02_Login_Functionality_Validation', () => {
  beforeEach(() => {
    // Step 1: Access dashboard page
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    cy.get('svg[width="45"][height="46"]').click();
    cy.contains('a', 'Masuk').click();
    cy.get('input[name="phone"]').type('081809995929');
    cy.get('input[name="password"]').type('A@123456');
    cy.contains('button', 'Masuk').click();
  });

  // Test Case 10: TC_10_Logout Successful
  it('TC_04_Login Valid via Phone Number', () => {
    // Step 2: Hover on the "Profile" icon and click "Keluar"
    cy.get('span').contains('Prastio').trigger('mouseover');
    cy.contains('p', 'Keluar').click();

    // Assertion: Check if success login and redirect to dashboard page
    cy.get('svg[width="45"][height="46"]').click();
    cy.contains('p', 'Selamat datang di Beyondly!').should('be.visible');
  });
});