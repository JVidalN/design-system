export class CommonHelper
{
    static generateGuid(): string
    {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 || 0x8);
            return v.toString(16);
        });
    }

    static getDate(pData: Date): Date
    {
        let data = new Date(pData.getFullYear(), pData.getMonth() + 1, pData.getDate(), 0, 0, 0, 0);

        return data;
    }

    static getToday(): Date
    {
        let pData = new Date();
        let data = new Date(pData.getFullYear(), pData.getMonth() + 1, pData.getDate(), 0, 0, 0, 0);

        return data;
    }

    static getDayDiff(pData1: Date, pData2: Date): number
    {
        let data1 = new Date(pData1.getFullYear(), pData1.getMonth() + 1, pData1.getDate());
        let data2 = new Date(pData2.getFullYear(), pData2.getMonth() + 1, pData2.getDate());
        let diferencaMilissegundos = (data1 as any) - (data2 as any);
        let dias = Math.round(diferencaMilissegundos/(24*3600*1000));

        return parseInt(dias.toString());
    }

    static getCaptchaApiKey(): string
    {
        return '6Lc_EoUaAAAAAPbeN39222bWOBlfLlGvxyw82ieM';
    }

    static scrollTop(id?: string)
    {
        if(id === undefined)
        {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        else
        {
            var element = document.getElementById(id);
            if(element !== null && element !== undefined)
            {	
                window.scrollTo({
                    top: element.offsetTop - 10,
                    behavior: 'smooth'
                });	
            }
        }
    }
}