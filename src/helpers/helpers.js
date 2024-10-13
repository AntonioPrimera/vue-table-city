export default {
    
    //todo: remove this function - replace it with formatNumber(...)
    formatNumericValue(value) {
        if (!this.isNumericValue(value)) return value;

        return this.formatNumber(value, 2);
    },

    isNumericValue (value) {
        return value !== null && typeof value === 'number';
    },

    isDate(value) {
        if (!value) return false;

        // If it is a string date, it must have 10 characters (dd.mm.YYYY)
        if (typeof value === 'string' && value.length !== 10) return false;

        let date = this.parseDate(value);

        return date instanceof Date;
    },

    parseDate(date, format = 'd.m.Y') {
        if (format === 'd.m.Y') {
            let year = date.substring(6);
            let month = date.substr(3, 2);
            let day = date.substr(0, 2);

            return new Date(year, month - 1, day, 0, 0, 0, 0);
        }

        return undefined;
    },
    
    formatNumber(value, decimals, decimalSeparator = ',', thousandsSeparator = '.', prefix = '', suffix = '') {
        if (value === null || isNaN(value)) return value;
        
        let negative = value < 0 ? '-' : '';
        let absValue = Math.abs(value);
        let integerPart = Math.floor(absValue);
        let decimalPart = absValue - integerPart;
        let formattedIntegerPart = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        let formattedDecimalPart = decimalPart.toFixed(decimals).slice(2);
        
        return `${prefix}${negative}${formattedIntegerPart}${decimalSeparator}${formattedDecimalPart}${suffix}`;
    },

    //formatNumber(value, options = {}) {
    //    if (value === null || isNaN(value)) return value;
    //
    //    let standardOptions = {
    //        minimumFractionDigits: (typeof options.minimumFractionDigits === "number" ? options.minimumFractionDigits : null )
    //            || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
    //        maximumFractionDigits: (typeof options.maximumFractionDigits === "number" ? options.maximumFractionDigits : null )
    //            || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
    //    }
    //
    //    return (value * 1).toLocaleString(document.documentElement.lang, standardOptions);
    //},

    cleanTerm(term) {
        if (!(term && typeof term === 'string')) return '';

        // Remove diacritics
        term = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return term.replace(/[^0-9a-z]/gi, '').toLowerCase();
    },

    getValue(obj, path) {
        return path.includes('.')
            ? path.split('.').reduce((acc, part) => acc && acc[part], obj)
            : obj[path];
    },
    
    uid(length) {
        let result = '';
        while (result.length < length) {
            result += Math.random().toString(36).substring(2, 15);
        }
        return result.substring(0, length);
    },
    
    //uuid4() {
    //    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //        let r = Math.random() * 16 | 0;
    //        let v = c === 'x' ? r : (r & 0x3 | 0x8);
    //        return v.toString(16);
    //    });
    //}
};