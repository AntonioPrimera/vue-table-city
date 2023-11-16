export default {
    /**
     * Get translate from the translation file.
     *
     * e.g. {
     *    "column_settings_modal": {
     *        "title": "Column order and visibility",
     *    },
     *    "style_settings_modal": {...},
     * }
     *
     * and the given path is "column_settings_modal.title" then return "Column order and visibility"
     */
    getTranslate(path, object = window.__vue3TableDataConfig.translation.file) {
        let pathParts = path.split('.');

        pathParts.forEach(step => {
            if (object)
                object = object[step];
            else
                object = undefined;
        });

        return object;
    },

    /**
     * Set the translation file. We need a json file with the proper structure
     * (you can find the structure in translate.json file)
     *
     */
    setTranslateFile(jsonFile) {
        //validate if the given file is a valid json file
        if (!this.hasValidContent(jsonFile)) return;

        window.__vue3TableDataConfig.translation.file = jsonFile;
    },

    /**
     * Validate json file. Check if the given file has the proper structure.
     * You can find the structure in translate.json file
     */
    hasValidContent(jsonFile) {
        //validate if the given file is a valid object
        if(typeof jsonFile !== 'object') {
            console.error('The given file is not a valid json file', jsonFile);

            return false;
        }

        let structure = [
            'search',

            'column_settings_modal', 'column_settings_modal.title', 'column_settings_modal.description',
            'column_settings_modal.actions', 'column_settings_modal.actions.save', 'column_settings_modal.actions.cancel',

            'style_settings_modal', 'style_settings_modal.title', 'style_settings_modal.description',
            "style_settings_modal.sections", "style_settings_modal.sections.row_size", "style_settings_modal.sections.numbers_color",
            "style_settings_modal.sections.row_size.title", "style_settings_modal.sections.numbers_color.title",
            "style_settings_modal.sections.row_size.options", "style_settings_modal.sections.row_size.options.small",
            "style_settings_modal.sections.row_size.options.medium", "style_settings_modal.sections.row_size.options.large",
            "style_settings_modal.sections.numbers_color.options.black", "style_settings_modal.sections.numbers_color.options.color",

            'style_settings_modal.actions', 'style_settings_modal.actions.save', 'style_settings_modal.actions.cancel',
        ];

        structure.forEach(path => {
            let translate = this.getTranslate(path, jsonFile);

            if (translate === undefined) {
                console.error(
                    'The given file has an invalid structure. We could not find the translate for path: '
                    + path.replaceAll('.', ' -> ')
                );

                return false;
            }
        })

        return true;
    },
};
