export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomepagePartsFragmentDoc = gql`
    fragment HomepageParts on Homepage {
  __typename
  hero {
    __typename
    eyebrow
    title
    subtitle
    ctaLabel
    ctaUrl
    waUrl
    tgUrl
  }
  about {
    __typename
    sectionLabel
    body
    stats {
      __typename
      value
      label
    }
  }
  portfolio {
    __typename
    sectionLabel
    heading
    items {
      __typename
      title
      area
      style
      image
    }
  }
  process {
    __typename
    heading
    steps {
      __typename
      num
      title
      desc
    }
    extrasHeading
    extras {
      __typename
      title
      desc
    }
  }
  prices {
    __typename
    heading
    note
    ctaLabel
    ctaUrl
    items {
      __typename
      title
      price
      unit
      featured
    }
  }
  contacts {
    __typename
    name
    phone
    email
    address
    waUrl
    tgUrl
    waCtaText
    tgCtaText
  }
  seo {
    __typename
    title
    description
    keywords
    ogImage
  }
}
    `;
export const PartnersPartsFragmentDoc = gql`
    fragment PartnersParts on Partners {
  __typename
  heading
  items {
    __typename
    name
    logo
    url
  }
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  siteName
  siteTagline
  footerCopyright
  nav {
    __typename
    label
    href
  }
  whatsappNumber
  whatsappMessage
  telegramHandle
}
    `;
export const HomepageDocument = gql`
    query homepage($relativePath: String!) {
  homepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomepageParts
  }
}
    ${HomepagePartsFragmentDoc}`;
export const HomepageConnectionDocument = gql`
    query homepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomepageFilter) {
  homepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomepageParts
      }
    }
  }
}
    ${HomepagePartsFragmentDoc}`;
export const PartnersDocument = gql`
    query partners($relativePath: String!) {
  partners(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PartnersParts
  }
}
    ${PartnersPartsFragmentDoc}`;
export const PartnersConnectionDocument = gql`
    query partnersConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PartnersFilter) {
  partnersConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PartnersParts
      }
    }
  }
}
    ${PartnersPartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    homepage(variables, options) {
      return requester(HomepageDocument, variables, options);
    },
    homepageConnection(variables, options) {
      return requester(HomepageConnectionDocument, variables, options);
    },
    partners(variables, options) {
      return requester(PartnersDocument, variables, options);
    },
    partnersConnection(variables, options) {
      return requester(PartnersConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
