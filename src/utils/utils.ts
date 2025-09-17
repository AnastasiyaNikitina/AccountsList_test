export const arrToString = (arr: Array<{text: string}>) => {
    return arr.map(obj => obj.text).join('; ');
}