import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { ImageV2, ImageV2IsEmptyFn } from "@adobe/aem-core-components-react-base";

const RESOURCE_TYPE = "core/wcm/components/image/v2/image";
const EditConfig = {
  emptyLabel: "Image",
  isEmpty: ImageV2IsEmptyFn,
  resourceType: RESOURCE_TYPE
};

MapTo(RESOURCE_TYPE)(ImageV2, EditConfig);
export const V2Image = withMappable(ImageV2, EditConfig);