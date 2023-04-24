export declare class ArrayHelper {
    static groupBy(data: any[], property: string): Map<string, any[]>[];
    static groupByResult(data: any[], property: string): GroupResult[];
}
export declare class GroupResult {
    constructor(pKey: string);
    key: string;
    items: any[];
}
//# sourceMappingURL=ArrayHelper.d.ts.map