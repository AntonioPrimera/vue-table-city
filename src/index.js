//--- --- Components --------------------------------------------------------------------------------------------------
import SmartTable from "./components/SmartTable.vue";
import TableControls from "./components/TableControls.vue";
import {Column} from "./ViewModels/Column.js";

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

export { SmartTable, TableControls, Column };