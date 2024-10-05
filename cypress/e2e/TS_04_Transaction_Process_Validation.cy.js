describe('TS_02_Login_Functionality_Validation', () => {
  beforeEach(() => {
    // Step 1: Access dashboard page
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    cy.get('svg[width="45"][height="46"]').click();
    cy.contains('a', 'Masuk').click();
    cy.get('input[name="phone"]').type('0813207334442');
    cy.get('input[name="password"]').type('A@123456');
    cy.contains('button', 'Masuk').click();
  });

  // // Test Case 8: TC_08_Complete Checkout And Choose Payment
  // it('TC_08_Complete Checkout And Choose Payment', () => {
  //   // Step 2: Click "+ Keranjang" button 
  //   cy.wait(3000);
  //   cy.get('.styles_card-grid__ODf0c').find('.ButtonKeranjangQbee_add-to-cart-text__wDLxl').first().click({force: true});

  //   // Step 3: Click "Shopping Chart" button
  //   cy.wait(2000);
  //   cy.get('.HeaderQbee_total-cart__Acy0A').click();

  //   // Step 4: Click "+" button
  //   cy.get('.chakra-button.css-1mcr1j2').eq(1).click();
  //   cy.get('.chakra-button.css-1mcr1j2').eq(1).click();
  //   cy.get('.chakra-button.css-1mcr1j2').eq(1).click();
  //   cy.get('.chakra-button.css-1mcr1j2').eq(1).click();

  //   // Step 5: "Beli Sekarang" button
  //   cy.get('.chakra-button.css-1pilj7v').click({force: true});

  //   // Step 6, 7, 8: Select delivery options
  //   cy.get('.pickDelivery_pickDelivery-upper__gRRQ_').click({force: true});
  //   cy.get('input[name="delivery-opt"]').first().click();
  //   cy.get('.pickCourier_title-content__dZgUS').eq(1).find('input[type="radio"]').click();

  //   // Step 9: Click "Pilih Pembayaran" button
  //   cy.contains('button', 'Pilih Pembayaran').click({ force: true });

  //   // Assertion: Check if success checkout and redirect to payment page
  //   cy.contains('h1', 'Ringkasan Pesanan').should('be.visible');
  // });

  // Test Case 9: TC_09_View Transaction History And Detail
  it('TC_09_View Transaction History And Detail', () => {
    // Step 2: Hover on the "Nota" icon and click "Lihat semua"
    // cy.wait(5000);
    cy.get('#search-all-product').trigger('mouseover');
    cy.contains('button', 'Lihat semua').click();

    // Step 3: Click "Detail Transaksi" button
    cy.contains('button', 'Detail transaksi').click();

    // Assertion: Check if success checkout and redirect to payment page
    cy.contains('p', 'No. Invoice').should('be.visible');
  });
});