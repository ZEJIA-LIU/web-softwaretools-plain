import { addPet } from '../module/index'
const newPEt = {
    name: 'testPet',
    category: { name: 'test', id: 0 },
    status: 'sold',
    tags: [],
    id: 99999
}
test('testNewPet', () => {
    return addPet(newPEt).then(res => {
        const { data } = res
        expect(data.name).toBe('testPet')
        expect(data.category.name).toBe('test')
        expect(data.category.id).toBe(0)
        expect(data.status).toBe('sold')
        expect(data.id).toBe(99999)
    })
})