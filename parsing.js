function parseNestedJSON(obj, prefix = '', result = {}) {
    for (let key in obj) {
        // Если prefix не пустой, добавляем к нему текущий ключ через точку
        let newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Если значение — объект, рекурсивно вызываем функцию для его обработки
            parseNestedJSON(obj[key], newKey, result);
        } else {
            // Если значение не объект, добавляем его в результирующий объект с новым ключом
            result[newKey] = obj[key];
        }
    }
    return result;
}

const input = {
    a: {
        b: {
            c: 42,
        },
        d: [1, 2],
    },
};

console.log(parseNestedJSON(input));
