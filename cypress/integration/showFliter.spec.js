describe('showFliterFeature', () => {
    it('fliterByCategory', () => {
        const categoryArray = ['cat', 'dog', 'bird', 'rabbit', 'hamsters']
        const random = Math.floor(Math.random() * 5);
        const category = categoryArray[random]
        cy.visit(`https://zejia-liu.github.io/web-softwaretools-plain/#/?category=${category}`)
        cy.get('.liWrap').should('have.class', category)
    })
    it('filterByTag', () => {
        const tagArray = ['brave', 'active', 'lazy', 'elegance', 'mild']
        const random = Math.floor(Math.random() * 5);
        const tag = tagArray[random]
        cy.visit(`https://zejia-liu.github.io/web-softwaretools-plain/#/?category=all&tag=${tag}`)
        cy.get('.tagsWrapper').each(div => {
            expect(div.children().find('.tagName').filter(`.${tag}`).length).not.to.eq(0)
        })
    })
})