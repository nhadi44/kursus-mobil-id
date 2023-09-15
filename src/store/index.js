import {createStore} from "vuex";
import offCanvasModule from "./offcanvas/index.js";

export default createStore({
    modules: {
        offcanvas: offCanvasModule
    }
})