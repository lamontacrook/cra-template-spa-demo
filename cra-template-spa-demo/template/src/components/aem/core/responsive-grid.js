import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { ResponsiveGrid } from "@adobe/aem-react-editable-components";
import "../aem-responsive-grid.css";


const RESOURCE_TYPE = "wcm/foundation/components/responsivegrid";
const EditConfig = {
  emptyLabel: "Layout Container",
  isEmpty: (props) => props.cqItemsOrder == null || props.cqItemsOrder.length === 0,
  resourceType: RESOURCE_TYPE
};

MapTo(RESOURCE_TYPE)(ResponsiveGrid, EditConfig);
export const AEMResponsiveGrid = withMappable(ResponsiveGrid, EditConfig);