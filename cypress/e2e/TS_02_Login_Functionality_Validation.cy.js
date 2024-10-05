describe('TS_02_Login_Functionality_Validation', () => {
  beforeEach(() => {
    // Step 1: Access main page
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    cy.wait(500);
    cy.get('svg[width="45"][height="46"]').click();
  });

  // Test Case 4: TC_04_Login Valid via Phone Number
  it('TC_04_Login Valid via Phone Number', () => {
    // Step 2: Click "Daftar Jadi Member" button
    cy.contains('a', 'Masuk').click();

    // Step 3: Input valid Nomor Telepon
    cy.get('input[name="phone"]').type('0813207334442');

    // Step 4: Input valid Password
    cy.get('input[name="password"]').type('A@123456');

    // Step 5: Click "Masuk" button
    cy.contains('button', 'Masuk').click();

    // Assertion: Check if success login and redirect to dashboard page
    cy.wait(1000);
    cy.get('#search-all-product').should('be.visible');
  });

  // Test Case 5: TC_05_Login Valid via Email
  it('TC_04_Login Valid via Email', () => {
    // Step 2: Click "Daftar Jadi Member" button
    cy.contains('a', 'Masuk').click();

    // Step 3: Input valid Email
    cy.get('#page-login__tabs-email').click();
    cy.get('input[name="email"]').type('0813207334442@xyz.com');

    // Step 4: Input valid Password
    cy.get('input[name="password"]').type('A@123456');

    // Step 5: Click "Masuk" button
    cy.contains('button', 'Masuk').click();

    // Assertion: Check if success login and redirect to dashboard page
    cy.wait(1000);
    cy.get('#search-all-product').should('be.visible');
  });

  // Test Case 6: TC_06_Login Invalid Password Validation Three Attempts
  it('TC_06_Login Invalid Password Validation Three Attempts', () => {
    // Step 2: Click "Daftar Jadi Member" button
    cy.contains('a', 'Masuk').click();

    // Step 3: Input valid Nomor Telepon
    cy.wait(1000);
    cy.get('input[name="phone"]').type('0813207334411');

    // Step 4: Input invalid Password
    cy.get('input[name="password"]').type('A@234567');
    cy.contains('button', 'Masuk').click();
    cy.get('input[name="password"]').type('A@345678');
    cy.contains('button', 'Masuk').click();
    cy.get('input[name="password"]').type('A@456789');
    cy.contains('button', 'Masuk').click();
    cy.contains('button', 'Masuk').click();

    // Step 5: Click "Masuk" button
    cy.contains('button', 'Masuk').click();

    // Assertion: Check if success login and redirect to dashboard page
    cy.contains('p', 'Akun Dikunci Sementara').should('be.visible');

  });
});