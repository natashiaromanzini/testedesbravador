describe('teste de reserva', () => {
    it('passes', () => {
      cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-1111/reservation?checkin=2024-08-20&checkout=2024-08-23&adults=1&child1=0&child2=0&child3=0&resident=0');
      cy.wait(50000);
      cy.contains('button','Adicionar').click();
      cy.wait(5000);
      cy.get('button[class*="cart-item-remove-button float-right"]').click();
      cy.get('select').select('2');
      cy.get('button[class*="button-value btn btn-secondary"]').click();
      cy.get('input[type="number"]').type('1').trigger('change');      
      cy.contains('button','Adicionar').click();
      cy.wait(6000)
      cy.contains('button','Continuar').click();
      cy.contains('button','Hóspedes').click();
      cy.wait(500)
      cy.get('input[type="text"]').first().type('Joao Alves');
      cy.get('input[type="text"]').eq('1').type('Maria Silva');
      cy.get('input[type="text"]').last().type('Valentina Abigail');
      cy.get('input[type="email"]').first().type('joaoalves@teste.com.br');
      cy.get('input[type="email"]').eq('1').type('mariasilva@teste.com.br');
      cy.get('input[type="email"]').last().type('valentinaabigail@teste.com.br');
      cy.contains('button','Salvar').click();
      cy.contains('button','Continuar').click();
      cy.get('input[type="email"]').type('joaoalves@teste.com.br');
      cy.get('input[name="firstName"]').type('Joao');
      cy.get('input[name="lastName"]').type('Alves');
      cy.get('select').first().select('CPF');
      cy.get('input[name="document"]').type('65539760077');
      cy.wait(5000);
      cy.get('input[name="number"]').type('4000000000000044');
      cy.get('input[name="name"]').type('DESBRAVADOR SOFTWARE');
      cy.get('input[name="expiry"]').type('12/23');
      cy.get('input[name="cvc"]').type('123');      
      cy.wait(40000);
      cy.contains('button','Finalizar').click();

    })
  });
  