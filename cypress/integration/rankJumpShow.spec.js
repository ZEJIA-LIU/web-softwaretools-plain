describe('rank page', () => {
    it('click icon can jump to show page', () => {
        cy.visit('https://zejia-liu.github.io/web-softwaretools-plain/#/sold')
        const categoryArray = ['cat', 'dog', 'bird', 'rabbit', 'hamsters']
        const random = Math.floor(Math.random() * 5);
        const category = categoryArray[random]
        cy.get(`[data-cy=${category}]`).click()
        cy.url().should('include', `/?category=${category}`)
    })
})