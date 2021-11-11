import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { ContainerV1, ContainerV1IsEmptyFn } from "@adobe/aem-core-components-react-spa"
import "../aem-responsive-grid.css";

MapTo("dam/cfm/components/grid")(ContainerV1, { isEmpty: ContainerV1IsEmptyFn });
export const V1ContentFragmentGrid = withMappable(ContainerV1, { isEmpty: ContainerV1IsEmptyFn });