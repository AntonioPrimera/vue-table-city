//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {ref} from "vue";

export function useManagesLoadedData(){
    //--- --- Attributes ----------------------------------------------------------------------------------------------
    let data = ref([]);
    let loadedData = ref([]);

    //--- --- Methods -------------------------------------------------------------------------------------------------

    function getAllData() {
        return data.value;
    }

    /**
     * Get all loaded data
     */
    function getLoadedData() {
        return loadedData.value;
    }

    /**
     * Set all data in the data array
     */
    function setData(newData) {
        data.value = newData;
        loadedData.value = [];

        loadData(75);
    }

    /**
     * Loads more data from the data array(used for lazy load elements on the page).
     */
    function loadData(count = 30) {
        let lastIndex = loadedData.value.length;

        if (lastIndex >= data.value.length) return;

        let newData = data.value.slice(lastIndex, lastIndex + count);

        loadedData.value = [...loadedData.value, ...newData];
    }

    /**
     * Refreshes the loadedData array.
     */
    function refreshLoadedData() {
        loadedData.value = [];

        loadData();
    }

    return {
        getAllData,
        getLoadedData,

        setData,
        loadData,
        refreshLoadedData
    }
}
