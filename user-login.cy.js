describe('User Login', () => {
  it('positive : user succesfully login', () => {
    cy.visit('http://localhost:8000');
    //select email
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    //select password
    cy.get('[data-id="password"]').type("password");
    //click button login
    cy.get('[data-id="submit"]').click();
    //Assert text
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");
  })

  it('negative : failed to login due to invalid username', ()  =>{
    cy.visit('http://localhost:8000');
    //select email
    cy.get('[data-id="email"]').type("uperadmin@gmail.com");
    //select password
    cy.get('[data-id="password"]').type("password");
    //click button login
    cy.get('[data-id="submit"]').click();
    //Assert text
    cy.get('.invalid-feedback').should("contain", "These credentials do not match");
  })

  it('negative : failed to login due to invalid password', ()  =>{
    cy.visit('http://localhost:8000');
    //select email
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    //select password
    cy.get('[data-id="password"]').type("password123");
    //click button login
    cy.get('[data-id="submit"]').click();
    //Assert text
    cy.get('.invalid-feedback').should("contain", "These credentials do not match");
  })

  it('negative : failed to login due to empty username', ()  =>{
    cy.visit('http://localhost:8000');
    //select email
    cy.get('[data-id="email"]');
    //select password
    cy.get('[data-id="password"]').type("password");
    //click button login
    cy.get('[data-id="submit"]').click();
    //Assert text
    cy.get('.invalid-feedback').should("contain", "The email field is required.");
  })

  it('negative : failed to login due to empty password', ()  =>{
    cy.visit('http://localhost:8000');
    //select email
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    //select password
    cy.get('[data-id="password"]');
    //click button login
    cy.get('[data-id="submit"]').click();
    //Assert text
    cy.get('.invalid-feedback').should("contain", "The password field is required.");
  })
})