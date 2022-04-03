import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
} else {
  // In development mode, redirect from "/" to app root
  if (location.pathname === "/" && environment.appRoot) {
    location.href = environment.appRoot;
  }
}

const initialStateScriptTag = document.getElementById("__AEM_STATE__");
if (!!initialStateScriptTag) {
  try {
    const initialState = JSON.parse(initialStateScriptTag.innerHTML);
    // @ts-ignore
    window.initialModel = initialState.rootModel;
    initialStateScriptTag.remove();
  } catch (err) {
    console.warn("failed to hydrate app", err);
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
