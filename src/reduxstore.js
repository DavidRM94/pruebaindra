import { configureStore } from "@reduxjs/toolkit";
import coloreleg from "./Slicersreducers.js";

const reduxstore=configureStore({
    reducer:{
        coloreleg
    }
});

export default reduxstore;