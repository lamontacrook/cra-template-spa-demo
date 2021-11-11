import React from 'react';
import { withMappable, MapTo, Utils, ComponentMapping } from '@adobe/aem-react-editable-components';
import { ContentFragmentV1, ContentFragmentV1IsEmptyFn } from "@adobe/aem-core-components-react-spa/dist/container/contentfragment/v1"
import V1ContentFragmentGrid from "./v1-content-fragment-grid";
import "../aem-content-fragment.css"

class ContentFragment extends ContentFragmentV1 {

  getHTML(html) {
    return { __html: html }
  }

  getFragmentGrid(key) {
    let fragmentGrid = false;
    if (this.props.cqItemsOrder.includes(key) && this.props.cqItems[key]) {
      const itemProps = Utils.modelToProps(this.props.cqItems[key]);
      if (itemProps) {
        const itemComponent = ComponentMapping.get(itemProps.cqType);
        if (itemComponent) {
          fragmentGrid = this.connectComponentWithItem(itemComponent, itemProps, key);
        }
      }
    }

    return fragmentGrid;
  }

  connectComponentWithItem(ChildComponent, itemProps, itemKey) {
    const itemPath = this.getItemPath(itemKey);

    return <ChildComponent {...itemProps}
      key={`${itemKey}-${itemPath}}`}
      cqPath={itemPath}
      isInEditor={this.props.isInEditor}
      containerProps={this.getItemComponentProps(itemProps, itemKey, itemPath)} />;
  }

  getItemPath(itemKey) {
    return (this.props && this.props.cqPath) ? (this.props.cqPath + '/' + itemKey) : itemKey;
  }

  getItemComponentProps(item, itemKey, itemPath) {
    return {};
  }

  render() {
    return (
      <div className={`contentfragment ${this.props.componentProperties.containerProps.className}`}>
        <article
          id={this.props.id}
          className={`cmp-contentfragment`}
          data-cmp-contentfragment-model={this.props.model}
          data-cmp-data-layer={JSON.stringify(this.props.dataLayer)}>
          <h3 className="cmp-contentfragment__title">{this.props.title}</h3>
          <div className="cmp-contentfragment__elements">
            {this.props.paragraphs && this.props.paragraphs.map((paragraph, key) => (
              <React.Fragment key={key}>
                {this.getFragmentGrid(`par${key}`)}
                <div key={key} dangerouslySetInnerHTML={this.getHTML(paragraph)} />
              </React.Fragment>
            ))}
          </div>
        </article>
      </div>
    )
  }
}

MapTo("core/wcm/components/contentfragment/v1/contentfragment")(ContentFragment, { isEmpty: ContentFragmentV1IsEmptyFn });
export const V1ContentFragment = withMappable(ContentFragment, { isEmpty: ContentFragmentV1IsEmptyFn });
