export class ArrayHelper
{
    public static groupBy(data: any[], property: string): Map<string, any[]>[]
    {
        let group = data.reduce((acc, obj) => 
        {
            const key = obj[property];
            if (!acc[key]) 
            {
              acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, new Map<string, any[]>());

        return group;
    }

    public static groupByResult(data: any[], property: string): GroupResult[]
    {
        let lista = new Array<GroupResult>();
        
        data.reduce((acc, obj) => 
        {
            const key = obj[property];

            //verifica se ja tem na lista
            const index = lista.findIndex(a => a.key === key);
            if(index === -1)
            {
                lista.push(new GroupResult(key));
            }
            
            //adiciona na lista correta
            let atual = lista.find(a => a.key === key);
            if(atual != null)
            {
                atual.items.push(obj);
            }

            return acc;
        }, {});

        return lista;
    }
}

export class GroupResult
{
    constructor(pKey: string)
    {
        this.key = pKey;
        this.items = new Array<any>();
    }

    public key: string;
    public items: any[];
}