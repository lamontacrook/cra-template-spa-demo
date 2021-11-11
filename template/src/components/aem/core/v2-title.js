import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { TitleV2, TitleV2IsEmptyFn } from "@adobe/aem-core-components-react-base";

const RESOURCE_TYPE = "core/wcm/components/title/v2/title"
const EditConfig = {
  emptyLabel: "Title",
  isEmpty: TitleV2IsEmptyFn,
  resourceType: RESOURCE_TYPE
};

MapTo(RESOURCE_TYPE)(TitleV2, EditConfig);
export const V2Title = withMappable(TitleV2, EditConfig); 