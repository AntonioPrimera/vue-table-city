//--- --- Components --------------------------------------------------------------------------------------------------
import TableData from "./components/TableData.vue";
import TableControls from "./components/TableControls.vue";

//--- --- EventBus ----------------------------------------------------------------------------------------------------
import mitt from "mitt";

window.__tableEventBus = mitt();

export { TableData, TableControls };

// window.__vue3TableDataConfig = {
// mit: 'todo',
// translationFile: {},

// loadTranslation: () => translationFile...
// };
