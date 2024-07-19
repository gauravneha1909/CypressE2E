/// <reference types='cypress'/>

/* tag.id tag[attribute='ab'] tag.classname tag.classname[attribute='ab'] */

describe('Day 4 Test cases',()=>{

it.skip('testcase1',()=>


{

cy.visit('https://demoqa.com/')
cy.title().should('eq','DEMOQA')
cy.get("div[class='category-cards'] div:nth-child(1) div:nth-child(1) div:nth-child(3) h5:nth-child(1)").should('be.visible')
cy.get("div[class='category-cards'] div:nth-child(1) div:nth-child(1) div:nth-child(3) h5:nth-child(1)").click()
cy.url().should('include', 'elements')
cy.get("div[class='element-list collapse show'] li[id='item-0'] span[class='text']").should('be.visible')
cy.get("div[class='element-list collapse show'] li[id='item-0'] span[class='text']").click()
cy.get('.text-center').should('be.visible').should('have.text','Text Box')
cy.get('#userName').type('Testing')
cy.get('#userName').should('have.value','Testing') //id
cy.get('#userName').invoke('val').then((text)=>{

expect(text.trimEnd()).to.equal('Testing')



})

cy.get('#userEmail').should('be.visible')



})



})