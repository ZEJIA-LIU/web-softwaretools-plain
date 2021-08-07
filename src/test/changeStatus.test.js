import { addPet, changeStats, findById } from '../module/index'
const newPEt = {
    name: 'testPet',
    category: { name: 'test', id: 0 },
    status: 'sold',
    tags: [],
    id: 99999
}
test('testChangeStatus', () => {
    return addPet(newPEt).then(res => {
        return changeStats(99999, 'pending').then(res => {
            return findById(99999).then(res => {
                const { data } = res
                expect(data.status).toBe('pending')
            })
        })
    })
})