
import { parseJSON, addHours, format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export class UtilsHelper {
    public static formatDateTime(value: any) {

        if (value) {

            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let dateTime = format(dateTimeAddHours, 'dd/MM/yyyy HH:mm:ss');

            if (dateTime !== '31/12/1900 23:53:32')
                return dateTime;
            else
                return '-';
        } else {
            return '-';
        }
    }

    public static formatDate(value: any) 
    {
        if (value) 
        {
            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let date = format(dateTimeAddHours, 'dd/MM/yyyy');

            if (date !== '31/12/1900')
                return date;
            else
                return '-';
        } else {
            return '-';
        }
    }

    public static formatTime(value: any) {

        if (value) {

            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let dateTime = format(dateTimeAddHours, 'HH:mm');

            if (dateTime !== '31/12/1900 23:53:32')
                return dateTime;
            else
                return '-';
        } else {
            return '-';
        }
    }

    public static formatDateForFilename(value: any) {

        if (value) 
        {
            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let dateTime = format(dateTimeAddHours, 'yyyyMMdd_HHmm');

            if (dateTime !== '31/12/1900 23:53:32')
                return dateTime;
            else
                return '-';
        } else {
            return '-';
        }
    }

    public static formatCurrency(value: any) 
    {
        if(value === undefined)
            value = 0;
            
        return value.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2 });
    }

    public static formatRate(value: any, minimumDigits: number) {
        if (value)
            return value.toLocaleString('pt-BR', {style: 'percent', minimumFractionDigits: minimumDigits });
        else
            return '-';
    }

    public static getMonthDescription(month: number)
    {
        let description = "Nenhum";

        switch (month) {
            case 1:
                description = "Janeiro";
                break;
            case 2:
                description = "Fevereiro";
                break;
            case 3:
                description = "Março";
                break;
            case 4:
                description = "Abril";
                break;
            case 5:
                description = "Maio";
                break;
            case 6:
                description = "Junho";
                break;
            case 7:
                description = "Julho";
                break;
            case 8:
                description = "Agosto";
                break;
            case 9:
                description = "Setembro";
                break;
            case 10:
                description = "Outubro";
                break;
            case 11:
                description = "Novembro";
                break;
            case 12:
                description = "Dezembro";
                break;
            default:
                break;
        }

        return description;
    }

    public static removeMaskFromNumber(number: string) {
        return number.replace(/[^0-9]/g, '');
    }

    public static formatCpf(cpf: string) {
        if (!cpf) return null;

        let cpfAjustado = cpf?.padStart(11, "0");
        return cpfAjustado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    public static formatCnpj(cnpj: string) {
        if (!cnpj) return null;

        let cnpjAjustado = cnpj?.padStart(14, "0");
        return cnpjAjustado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    public static formatTelefone(telefone: string) {
        if (!telefone) return null;

        let textoAjustado = telefone.substring(0, telefone.length-4)+"-"+telefone.substring(telefone.length-4,telefone.length);
        
        return textoAjustado;
    }

    public static formatTelefoneComDdd(ddd: string, telefone: string) {
        if (!telefone || !ddd) return null;

        let textoAjustado = "(" + ddd + ") " + telefone.substring(0, telefone.length-4)+"-"+telefone.substring(telefone.length-4,telefone.length);
        
        return textoAjustado;
    }

    public static convertToDate(dateStr: any) {
        var parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
}
