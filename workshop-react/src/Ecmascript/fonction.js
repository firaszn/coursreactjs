export const searchById = (array, id) => {
    return array.find(item => item.id === id) || null;
};
