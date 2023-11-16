export function useEventBus(){
    //--- --- Attributes ----------------------------------------------------------------------------------------------
    let eventBus = window.__tableEventBus;

    //--- --- Methods -------------------------------------------------------------------------------------------------

    /**
     * Add an event handler for a specific event.
     *
     * @param {string} event - the event name
     * @param {function} handler - the function to be run on event trigger
     */
    function addEventHandler(event, handler) {
        eventBus.on(event, handler);
    }

    /**
     * Remove a specific event handler for a given event. The event
     * handler must be the same function which was added.
     * Anonymous functions can not be removed.
     *
     * @param {string} event - the event name
     * @param {function} handler - the function to be run on event trigger
     */
    function removeEventHandler(event, handler) {
        eventBus.off(event, handler);
    }

    /**
     * Trigger a specific event, by name and optionally provide some
     * data for the event. The data provided will be forwarded
     * to the handlers as the first function parameter.
     *
     * @param {string} event - the event name
     * @param {any} options - optional event data (can be anything)
     */
    function triggerEvent(event, options = null) {
        eventBus.emit(event, options);
    }

    return {
        addEventHandler,
        removeEventHandler,
        triggerEvent
    }
}
