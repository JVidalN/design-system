import { parseJSON, addHours, format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
export class UtilsHelper {
    static formatDateTime(value) {
        if (value) {
            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let dateTime = format(dateTimeAddHours, 'dd/MM/yyyy HH:mm:ss');
            if (dateTime !== '31/12/1900 23:53:32')
                return dateTime;
            else
                return '-';
        }
        else {
            return '-';
        }
    }
    static formatDate(value) {
        if (value) {
            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let date = format(dateTimeAddHours, 'dd/MM/yyyy');
            if (date !== '31/12/1900')
                return date;
            else
                return '-';
        }
        else {
            return '-';
        }
    }
    static formatTime(value) {
        if (value) {
            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let dateTime = format(dateTimeAddHours, 'HH:mm');
            if (dateTime !== '31/12/1900 23:53:32')
                return dateTime;
            else
                return '-';
        }
        else {
            return '-';
        }
    }
    static formatDateForFilename(value) {
        if (value) {
            let parsedDateTime = parseJSON(value);
            let znDateTime = utcToZonedTime(parsedDateTime, 'America/Sao_Paulo');
            let dateTimeAddHours = addHours(znDateTime, 3);
            let dateTime = format(dateTimeAddHours, 'yyyyMMdd_HHmm');
            if (dateTime !== '31/12/1900 23:53:32')
                return dateTime;
            else
                return '-';
        }
        else {
            return '-';
        }
    }
    static formatCurrency(value) {
        if (value === undefined)
            value = 0;
        return value.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2 });
    }
    static formatRate(value, minimumDigits) {
        if (value)
            return value.toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: minimumDigits });
        else
            return '-';
    }
    static getMonthDescription(month) {
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
    static removeMaskFromNumber(number) {
        return number.replace(/[^0-9]/g, '');
    }
    static formatCpf(cpf) {
        if (!cpf)
            return null;
        let cpfAjustado = cpf === null || cpf === void 0 ? void 0 : cpf.padStart(11, "0");
        return cpfAjustado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    static formatCnpj(cnpj) {
        if (!cnpj)
            return null;
        let cnpjAjustado = cnpj === null || cnpj === void 0 ? void 0 : cnpj.padStart(14, "0");
        return cnpjAjustado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
    static formatTelefone(telefone) {
        if (!telefone)
            return null;
        let textoAjustado = telefone.substring(0, telefone.length - 4) + "-" + telefone.substring(telefone.length - 4, telefone.length);
        return textoAjustado;
    }
    static formatTelefoneComDdd(ddd, telefone) {
        if (!telefone || !ddd)
            return null;
        let textoAjustado = "(" + ddd + ") " + telefone.substring(0, telefone.length - 4) + "-" + telefone.substring(telefone.length - 4, telefone.length);
        return textoAjustado;
    }
    static convertToDate(dateStr) {
        var parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
}
