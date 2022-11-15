export const getUniqueId = () => {
    return (Date.now().valueOf() * Math.floor(Math.random() * 10000) + 1).toString(16);
}