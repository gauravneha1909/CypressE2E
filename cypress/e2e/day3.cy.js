

///<reference types='cypress'/>

describe('Day 3 test cases',()=>
{

it('testcase1',()=>
    
{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    cy.get("[name='username']").should('be.visible')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").should('be.visible')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').invoke('text').then((text)=>{

        expect(text.trim()).to.equal('Dashboard')

    })

})


}
)