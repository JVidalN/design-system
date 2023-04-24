export class ArrayHelper {
    static groupBy(data, property) {
        let group = data.reduce((acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, new Map());
        return group;
    }
    static groupByResult(data, property) {
        let lista = new Array();
        data.reduce((acc, obj) => {
            const key = obj[property];
            //verifica se ja tem na lista
            const index = lista.findIndex(a => a.key === key);
            if (index === -1) {
                lista.push(new GroupResult(key));
            }
            //adiciona na lista correta
            let atual = lista.find(a => a.key === key);
            if (atual != null) {
                atual.items.push(obj);
            }
            return acc;
        }, {});
        return lista;
    }
}
export class GroupResult {
    constructor(pKey) {
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.key = pKey;
        this.items = new Array();
    }
}
