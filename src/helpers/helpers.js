export default {
    formatNumericValue(value) {
        if (!this.isNumericValue(value)) return value;

        return this.formatNumber(value, {fractionDigits: 2});
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
            let year = date.substr(6);
            let month = date.substr(3, 2);
            let day = date.substr(0, 2);

            return new Date(year, month - 1, day, 0, 0, 0, 0);
        }

        return undefined;
    },

    formatNumber(value, options = {}) {
        if (value === null || isNaN(value)) return value;

        let standardOptions = {
            minimumFractionDigits: (typeof options.minimumFractionDigits === "number" ? options.minimumFractionDigits : null )
                || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
            maximumFractionDigits: (typeof options.maximumFractionDigits === "number" ? options.maximumFractionDigits : null )
                || (typeof options.fractionDigits === "number" ? options.fractionDigits : 2),
        }

        return (value * 1).toLocaleString(document.documentElement.lang, standardOptions);
    },

    cleanTerm(term) {
        if (!(term && typeof term === 'string')) return '';

        // Remove diacritics
        term = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return term.replace(/[^0-9a-z]/gi, '').toLowerCase();
    }
};
