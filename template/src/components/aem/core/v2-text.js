import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { TextV2, TextV2IsEmptyFn } from "@adobe/aem-core-components-react-base";

MapTo("core/wcm/components/text/v2/text")(TextV2, { isEmpty: TextV2IsEmptyFn });
export const V2Text = withMappable(TextV2, { isEmpty: TextV2IsEmptyFn });