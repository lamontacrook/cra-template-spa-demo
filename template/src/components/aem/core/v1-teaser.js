import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { TeaserV1, TeaserV1IsEmptyFn } from "@adobe/aem-core-components-react-base";

const RESOURCE_TYPE = "core/wcm/components/teaser/v1/teaser";
const EditConfig = {
  emptyLabel: "Teaser",
  isEmpty: TeaserV1IsEmptyFn,
  resourceType: RESOURCE_TYPE
};

MapTo(RESOURCE_TYPE)(TeaserV1, EditConfig);
export const V1Teaser = withMappable(TeaserV1, EditConfig); 