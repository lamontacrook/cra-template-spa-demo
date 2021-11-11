import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { ContainerV1, ContainerV1IsEmptyFn } from "@adobe/aem-core-components-react-spa"

MapTo("wknd/components/experiencefragment")(ContainerV1, { isEmpty: ContainerV1IsEmptyFn });
export const WKNDExperienceFragment = withMappable(ContainerV1, { isEmpty: ContainerV1IsEmptyFn });