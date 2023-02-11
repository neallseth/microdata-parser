import { microdataQuickParse, microdataParseJSDOM } from "./microdata";
export default function microdataParse(html, options) {
  if (options) {
    return microdataParseJSDOM(html, options);
  } else if (html) {
    return microdataQuickParse(html);
  } else {
    console.error("No mark-up available");
  }
}
