import React from "react";
import ReactDOM from "react-dom";
import { VirtualScroll } from "./lib/VirtualScroll";
import { ScrollToTop } from "./lib/ScrollToTop";

ReactDOM.render(<VirtualScroll />, document.getElementById("root"));
ReactDOM.render(<ScrollToTop />, document.getElementById("root"));
