import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductsPagePreview from './preview-templates/ProductsPagePreview'
import PortfolioPagePreview from './preview-templates/PortfolioPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ContentPagePreview from './preview-templates/ContentPagePreview'
import ServicePagePreview from './preview-templates/ServicePagePreview'
import FaqPostPreview from './preview-templates/FaqPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductsPagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPagePreview)
CMS.registerPreviewTemplate('product', ProductPagePreview)
CMS.registerPreviewTemplate('content', ContentPagePreview)
CMS.registerPreviewTemplate('faq', FaqPostPreview)
CMS.registerPreviewTemplate('service', ServicePagePreview)
