describe('rank page', () => {
    it('click icon can jump to show page', () => {
        cy.visit('https://zejia-liu.github.io/web-softwaretools-plain/#/sold')
        cy.get('.rankIcon').eq(0).click()
        cy.url().should('include', '/?category=')
    })
    it('filter the right category', () => {
        let category
        cy.get('.ant-select-selection-item').eq(0).should((div) => {
            category = div.text().toLocaleLowerCase()
        }).then(() => {
            cy.url().should('include', category)
        })
    })
})