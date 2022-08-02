import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { applyPolyfills, defineCustomElements } from "h8k-components/loader"
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
applyPolyfills().then(() => {
  defineCustomElements(window)
})
