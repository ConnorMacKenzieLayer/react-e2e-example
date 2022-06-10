describe('Landing page', () => {
    it('successfully loads', () => {
        cy.wait(60000)
        cy.visit('/')
    })
})
