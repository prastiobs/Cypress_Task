describe('TS_01_Signup_Functionality_Validation', () => {
  beforeEach(() => {
    // Step 1: Access main page
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    cy.get('svg[width="45"][height="46"]').click();
  });

  // Test Case 1: TC_01_Registration Valid Input Format
  it('TC_01_Registration Valid Input Format', () => {
    // Step 2: Cick "Daftar Jadi Member" button
    cy.get('#daftar-reseller-navbar').click();

    // Step 3: Select "Tidak, saya tidak memiliki kode Referral" on radio button
    cy.contains('p', 'Tidak, saya tidak memiliki kode Referral.').click();

    // Step 4: Click "Lanjut" button
    cy.contains('button', 'Lanjut').click();

    // Step 5, 6, 7: Input user details
    cy.get('input[name="name"]').type('User');
    cy.get('input[name="phone"]').type('0813207334440');
    cy.get('input[name="email"]').type('0813207334440@xyz.com');
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

  // Test Case 2: TC_02_Registration Phone Number Already Registered
  it('TC_02_Registration Phone Number Already Registered', () => {
    // Step 2: Cick "Daftar Jadi Member" button
    cy.get('#daftar-reseller-navbar').click();

    // Step 3: Select "Tidak, saya tidak memiliki kode Referral" on radio button
    cy.contains('p', 'Tidak, saya tidak memiliki kode Referral.').click();

    // Step 4: Click "Lanjut" button
    cy.contains('button', 'Lanjut').click();

    // Step 5, 6, 7: Input user details
    cy.get('input[name="name"]').type('User');
    cy.get('input[name="phone"]').type('0813207334442');
    cy.get('input[name="email"]').type('0813207334442@xyz.com');
    cy.get('input[name="password"]').type('A@123456');

    // Step 8: Click "Daftar" button
    cy.contains('button', 'Daftar').click();

    // Assertion: Check if the warning message is visible
    cy.get('#chakra-modal--header-11').should('be.visible').and('contain', 'Akun sudah terdaftar');
  });

  // Test Case 3: TC_03_OTP Invalid Validation Three Attempts
  it('TC_03_OTP Invalid Validation Three Attempts', () => {
    // Step 2: Cick "Daftar Jadi Member" button
    cy.get('#daftar-reseller-navbar').click();

    // Step 3: Select "Tidak, saya tidak memiliki kode Referral" on radio button
    cy.contains('p', 'Tidak, saya tidak memiliki kode Referral.').click();

    // Step 4: Click "Lanjut" button
    cy.contains('button', 'Lanjut').click();

    // Step 5, 6, 7: Input user details
    cy.get('input[name="name"]').type('User');
    cy.get('input[name="phone"]').type('0813207334445');
    cy.get('input[name="email"]').type('0813207334445@xyz.com');
    cy.get('input[name="password"]').type('A@123456');

    // Step 8: Click "Daftar" button
    cy.contains('button', 'Daftar').click();

    // Step 9: Click "Whatsapp" button
    cy.contains('button', 'Whatsapp').click();

    // Step 10: Input valid OTP
    cy.get('#pin-input-13-0').type('234567');
    cy.contains('button', 'Kirim').click();
    cy.get('#pin-input-13-0').type('345678');
    cy.contains('button', 'Kirim').click();
    cy.get('#pin-input-13-0').type('456789');
    cy.contains('button', 'Kirim').click();

    // Step 11: Click "Kirim" button
    cy.contains('button', 'Kirim').click();

    // Assertion: Check if the error message is visible
    cy.get('#chakra-modal--header-7').should('be.visible').and('contain', 'Batas Percobaan  Telah Habis');
  });
});