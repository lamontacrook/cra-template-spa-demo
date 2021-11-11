let defaultSite = process.env.REACT_APP_SITE;
let defaultContentPath = `/content/${process.env.REACT_APP_SITE}${process.env.REACT_APP_CONTENT_PATH}`;
let { pathname } = window.location;

// For use in AEM editor, or when viewing an AEM content page directly
if (
  pathname.startsWith("/editor.html/content/") ||
  (pathname.includes("/content/") && pathname.endsWith("/en/index.html"))
) {

  defaultSite = pathname.replace("/content/", "").replace("/en/index.html", "");
  defaultContentPath = `/content/${defaultSite}/en/index`;

} else {
  // For use remote use
  if (window.localStorage.getItem("aemGuidesWkndPwa.site") === null) {
    window.localStorage.setItem("aemGuidesWkndPwa.site", defaultSite)
  } else {
    defaultSite = window.localStorage.getItem("aemGuidesWkndPwa.site");
  }

  if (window.localStorage.getItem("aemGuidesWkndPwa.contentPath") === null) {
    window.localStorage.setItem("aemGuidesWkndPwa.contentPath", defaultContentPath)
  } else {
    defaultContentPath = window.localStorage.getItem("aemGuidesWkndPwa.contentPath");
  }
}

export const contentPathSuffix = process.env.REACT_APP_CONTENT_PATH;
export const contentPath = defaultContentPath;
export const site = defaultSite;