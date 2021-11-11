const spaSiteTemplateName = "aem-site-template-wknd-spa";
const osgiSiteConfig = "com.adobe.aem.wcm.site.manager.config.SiteConfig";

export async function getRemoteSite() {
  try {
    const spaSites = [];
    const response = await fetch(`/content.1.json`, { mode: "no-cors" });
    const content = await response.json();
    const sites = Object.keys(content).filter(key => typeof content[key] === "object" && content[key]["jcr:primaryType"] === "cq:Page");

    for (const i in sites) {
      try {
        const response = await fetch(`/conf/${sites[i]}/sling:configs.1.json`);
        const rawData = await response.json();

        if (await rawData && rawData.hasOwnProperty(osgiSiteConfig)) {
          const { siteTemplatePath } = rawData[osgiSiteConfig];
          if (siteTemplatePath && siteTemplatePath.includes(spaSiteTemplateName)) spaSites.push(sites[i]);
        }

      } catch (e) {
        console.log("Error fetching site conf data", e);
      }
    }

    return spaSites;

  } catch (e) {
    console.log("Error fetching AEM Content", e);
    return [];
  }
}