describe('TS_03_Address_Registration_Functionality_Validation', () => {
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

  // Test Case 7: TC_07_Address Registration with Valid Data
  it('TC_07_Address Registration with Valid Data', () => {
    // Step 2: Click "Kirim ke (PILIH LOKASI)"
    cy.wait(1000);
    cy.get('.css-4up9p5').click();

    // Step 3: Click "+ Alamat Baru" button
    cy.wait(500);
    cy.contains('button', 'Alamat Baru').click();

    // Step 4, 5, 6: Input address details
    cy.wait(500);
    cy.get('input[name="name"]').type('Rumah saya', {force: true});
    cy.get('input[name="recipientName"]').type('Prastio');
    cy.get('input[name="recipientPhone"]').type('81809995929');
    cy.get('#react-select-2-input').type('Jawa Barat{enter}');
    cy.get('#react-select-3-input').type('Kab. Bandung{enter}');
    cy.get('#react-select-4-input').type('Bojongsoang{enter}');
    cy.get('#react-select-5-input').type('Bojongsoang{enter}');
    cy.get('#add-address__receiver-full-address').type('Bojongsoang 1 no 5');

    // Step 5: Click "Simpan Alamat" button
    cy.contains('button', 'Simpan Alamat').click({force: true});

    // Assertion: Check if the success message is visible
    cy.contains('p', 'Alamat berhasil ditambah').should('be.visible');
  });
});