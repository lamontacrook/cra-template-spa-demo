import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { ContainerV1, ContainerV1IsEmptyFn } from "@adobe/aem-core-components-react-spa"

const RESOURCE_TYPE = "core/wcm/components/experiencefragment/v1/experiencefragment";
const EditConfig = {
  emptyLabel: "Experience Fragment",
  isEmpty: ContainerV1IsEmptyFn,
  resourceType: RESOURCE_TYPE
};

MapTo(RESOURCE_TYPE)(ContainerV1, EditConfig);
export const V1ExperienceFragment = withMappable(ContainerV1, EditConfig); 
