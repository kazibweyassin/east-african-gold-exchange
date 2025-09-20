# Image Download Script for East African Gold Exchange Website

This script automatically downloads all the required images for the East African Gold Direct website from Unsplash.

## Prerequisites

- Node.js installed on your computer

## How to Use

1. Open a terminal/command prompt in the root directory of the project
2. Run the script with:

```bash
node scripts/download-images.js
```

## What This Script Does

The script will:

1. Create all necessary directories if they don't exist:
   - `/public/images/unsplash/`
   - `/public/images/unsplash/products/`
   - `/public/images/unsplash/testimonials/`
   - `/public/images/unsplash/backgrounds/`

2. Download the following images from Unsplash:
   - Hero background: Gold texture
   - Product images: Gold bars, nuggets, and coins
   - Testimonial profile images: Professional business portraits
   - Certification background: Gold leaf texture
   - CTA background: Gold luxury texture

3. Save them with the appropriate filenames in the respective directories

## Troubleshooting

If any download fails:
- The script will continue with other downloads
- Error messages will be displayed in the console
- You can run the script again to retry the downloads

## Note About Unsplash Usage

The images are downloaded directly from Unsplash. Please make sure to follow Unsplash's terms of use for your website:
https://unsplash.com/license

For production websites, consider adding proper attribution to Unsplash photographers.