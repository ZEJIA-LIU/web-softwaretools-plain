export const judgeTeam4Data = (item) => {
    if (!item || !item.tags) return false

    const tagsNames = item.tags.map(tag => tag.name)
    if (tagsNames.indexOf("team4") > -1) return true
    return false
}
export const rihtCategory = (category, pet) => {
    if (category === 'all') return true
    return pet.category.name === category
}

export const rightTag = (tag, pet) => {
    if (tag === 'all') return true
    const tagsNames = pet.tags.map(tag => tag.name)
    if (tagsNames.indexOf(tag) > -1) return true
    return false
}