describe('Testes de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('rafaelamumbach@gmail.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
  })

  it('Login com falha', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('rafaelamumbach@gmail.com')
    cy.get('[data-testid="senha"]').type('1234')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')
  })
})