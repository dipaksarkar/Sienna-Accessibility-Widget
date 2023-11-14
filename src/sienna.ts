import { LANGUAGE_DICTIONARY } from "./enum/Languages";
import { getSavedSettings, getSettings, saveSettings } from "./storage";
import runAccessibility from "./views/menu/runAccessibility";
import { renderWidget } from "./views/widget/widget"

export interface ISeinnaSettings {
    lang?: any,
    position?: any | 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right'
}

export const DEFAULT_OPTIONS: ISeinnaSettings = {
    lang: 'en',
    position: 'bottom-right'
}

export default function sienna(args?: ISeinnaSettings) {
    let options = {
        ...DEFAULT_OPTIONS,
        ...args
    };

    try {
        let settings = getSettings(false);

        options = {
            ...options,
            ...settings,
        }

        saveSettings(options);
        
        runAccessibility();
    } catch(e) {
        // silent error
    }

    console.log(options);

    renderWidget(options);
}