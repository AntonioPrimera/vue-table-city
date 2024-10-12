//--- --- Vue ---------------------------------------------------------------------------------------------------------
import {ref} from "vue";

export function useManagesLoadedData(){
    //--- --- Attributes ----------------------------------------------------------------------------------------------
    
    //this is the entire data set
    let data = ref([]);
    
    //this is the data that is currently visible in the table
    let loadedData = ref([]);
    const initialRows = 75;

    //--- --- Methods -------------------------------------------------------------------------------------------------
    
    /**
     * Get all available data
     */
    function getAllData() {
        return data.value;
    }

    /**
     * Get all loaded data (data that is currently visible in the table)
     * If lazy loading is implemented, this method will return a subset of the data array.
     */
    function getLoadedData() {
        return loadedData.value;
    }

    /**
     * Set all data in the data array and load the first 75 rows
     */
    function setData(newData) {
        data.value = newData;
        loadedData.value = [];

        loadData(initialRows);
    }

    /**
     * Loads more data from the data array (used for lazy load elements on the page).
     */
    function loadData(count = 30) {
        //check how much data is already loaded (visible in the table)
        let lastIndex = loadedData.value.length;

        //if all available data is already visible, do nothing
        if (lastIndex >= data.value.length) return;
        
        //load another batch of data (count rows) and add it to the loadedData array
        let newData = data.value.slice(lastIndex, lastIndex + count);
        loadedData.value = [...loadedData.value, ...newData];
    }

    /**
     * Refreshes the loadedData array.
     */
    function refreshLoadedData() {
        loadedData.value = [];
        loadData(initialRows);
    }

    return {
        getAllData,
        getLoadedData,

        setData,
        loadData,
        refreshLoadedData
    }
}
