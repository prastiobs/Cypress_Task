describe('User Registration Flow', () => {
  beforeEach(() => {
    // Step 1: Access main page
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    cy.get('svg[width="45"][height="46"]').click();
  });

  it('should successfully register a new user', () => {
    // Step 2: Cick "Daftar Jadi Member" button
    cy.get('#daftar-reseller-navbar').click();

    // Step 3: Select "Tidak, saya tidak memiliki kode Referral" on radio button
    cy.contains('p', 'Tidak, saya tidak memiliki kode Referral.').click();

    // Step 4: Click "Lanjut" button
    cy.contains('button', 'Lanjut').click();

    // Step 5, 6, 7: Input user details
    cy.get('input[name="name"]').type('User');
    cy.get('input[name="phone"]').type('0813207334441');
    cy.get('input[name="email"]').type('0813207334441@xyz.com');
    cy.get('input[name="password"]').type('A@123456');

    // Step 8: Click "Daftar" button
    cy.contains('button', 'Daftar').click();

    // Step 9: Click "Whatsapp" button
    cy.contains('button', 'Whatsapp').click();

    // Step 10: Input valid OTP
    cy.get('#pin-input-13-0').type('123456');

    // Step 11: Click "Kirim" button
    cy.contains('button', 'Kirim').click();

    // Assertion: Check if the success message is visible
    cy.contains('p', 'Verifikasi sukses').should('be.visible');
  });
});
