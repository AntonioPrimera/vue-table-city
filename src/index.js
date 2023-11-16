//--- --- Components --------------------------------------------------------------------------------------------------
import TableData from "./components/TableData.vue";
import TableControls from "./components/TableControls.vue";

//--- --- Translate ---------------------------------------------------------------------------------------------------
import translate from "./translate/translate.json";

//--- --- Helpers -----------------------------------------------------------------------------------------------------
import translateHelpers from "./helpers/translateHelpers.js";

//--- --- EventBus ----------------------------------------------------------------------------------------------------
import mitt from "mitt";

//=====================================================================================================================
//--- --- Setup -------------------------------------------------------------------------------------------------------
//=====================================================================================================================
window.__vue3TableDataConfig = {
    mitt: mitt(),

    translation: {
        file: translate,

        setTranslate: (translate) => translateHelpers.setTranslateFile(translate),
    },
};

export { TableData, TableControls };