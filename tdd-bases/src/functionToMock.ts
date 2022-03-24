export const functionToMock = {
    save(dataToSave: number) {
        console.log(dataToSave);
    },
    remove(dataToRemove: number) {
        console.log(dataToRemove);
    }
}
export const funcionQueLlamaMetodoDelMock = (value: number) => {
    functionToMock.save(value);
}
