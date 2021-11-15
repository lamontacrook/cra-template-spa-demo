/**Example query
export const navigationListQuery = `{
  topList {
    items {
      menuItems {
        menuName
        items {
          linkName
          linkUrl
          isBold
        }
        imageAssets {
          imageAsset {
            ... on ImageRef {
              _publishUrl
            }
          }
        }
      }
    }
  }
}`;**/