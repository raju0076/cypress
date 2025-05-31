
describe("orangeHRM  Demo site-Basic E2E Tests",()=>{
    const baseUrl="https://opensource-demo.orangehrmlive.com/"
    const validusername="Admin"
    const validPassword="admin123"


        beforeEach(()=>{
        cy.visit(baseUrl)
    })


        
    it('1. Home Page Load Test', () => {
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.contains('OrangeHRM').should('be.visible');
    });


    it("2. Login page UI tests",()=>{
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
        cy.get('.oxd-form button[type="submit"]').should('be.visible')
    })

    it("3.Invalid Login Attempt Test",()=>{
        cy.get('input[name="username"]').type('invalidUser')
        cy.get('input[name="password"]').type('wrongPass')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    })

    it("4.valid Login Attempt Tests",()=>{
        cy.get('input[name="username"]').type(validusername)
        cy.get('input[name="password"]').type(validPassword)
        cy.get('button[type="submit"]').click()

          cy.url().should('include', '/dashboard');
          cy.contains('Dashboard').should('be.visible')
    })
})


