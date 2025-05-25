import type { Schema, Struct } from '@strapi/strapi';

export interface ProductSeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_product_seo_metadata';
  info: {
    description: '';
    displayName: 'seo-metadata';
    icon: 'chartCircle';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    metaTitle: Schema.Attribute.String;
    openGraphDescription: Schema.Attribute.String;
    openGraphImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    openGraphTitle: Schema.Attribute.String;
  };
}

export interface ProductSize extends Struct.ComponentSchema {
  collectionName: 'components_product_sizes';
  info: {
    description: '';
    displayName: 'size';
    icon: 'attachment';
  };
  attributes: {
    sizess: Schema.Attribute.Enumeration<['s41', 's42', 's43']>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.seo-metadata': ProductSeoMetadata;
      'product.size': ProductSize;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
