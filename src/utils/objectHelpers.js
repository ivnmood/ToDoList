export const updateObjectInArrayTitle = (items, itemId, objPropName, title) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, title}
        }
        return i;
    })
}

export const updateObjectInArrayCompleted = (items, itemId, objPropName, completed) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, completed}
        }
        return i;
    })
}