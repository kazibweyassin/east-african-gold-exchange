const fs = require('fs');
const path = require('path');
const https = require('https');
const metadata = require('../public/images/image-metadata.json');

// Function to download an image from a URL to a specified path
function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    // Make sure the directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filePath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      reject(err);
    });

    file.on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Main function to download all website images
async function downloadAllWebsiteImages() {
  try {
    console.log('Starting website image downloads...');
    
    // Extract all image collections from metadata
    const allImages = [
      ...(metadata.productImages || []),
      ...(metadata.testimonialImages || []),
      ...(metadata.securityImages || []),
      ...(metadata.educationImages || []),
      ...(metadata.backgroundImages || []),
      ...(metadata.heroImages || [])
    ];
    
    // Images for the different sections
    const sectionImages = [
      // Testimonial images
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        path: path.join(__dirname, '../public/images/unsplash/testimonials/testimonial-1.jpg'),
        description: 'Business person 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        path: path.join(__dirname, '../public/images/unsplash/testimonials/testimonial-2.jpg'),
        description: 'Business person 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
        path: path.join(__dirname, '../public/images/unsplash/testimonials/testimonial-3.jpg'),
        description: 'Business person 3'
      },
      
      // Product showcase images
      {
        url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d',
        path: path.join(__dirname, '../public/images/unsplash/products/gold-bar.jpg'),
        description: 'Gold bar image'
      },
      {
        url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d',
        path: path.join(__dirname, '../public/images/unsplash/products/gold-bars.jpg'),
        description: 'Gold bars image'
      },
      {
        url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7',
        path: path.join(__dirname, '../public/images/unsplash/products/gold-nuggets.jpg'),
        description: 'Gold nuggets image'
      },
      {
        url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
        path: path.join(__dirname, '../public/images/unsplash/products/gold-coins.jpg'),
        description: 'Gold coins image'
      },
      
      // Background images
      {
        url: 'https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa',
        path: path.join(__dirname, '../public/images/unsplash/backgrounds/certification-bg.jpg'),
        description: 'Certification background'
      },
      {
        url: 'https://images.unsplash.com/photo-1534470397273-a1c5311d09d2',
        path: path.join(__dirname, '../public/images/unsplash/backgrounds/cta-bg.jpg'),
        description: 'CTA background'
      },
      {
        url: 'https://images.unsplash.com/photo-1589044762620-213164805346',
        path: path.join(__dirname, '../public/images/unsplash/gold-background.jpg'),
        description: 'Gold background for hero section'
      },
      {
        url: 'https://images.unsplash.com/photo-1631162905392-4106574ea96f',
        path: path.join(__dirname, '../public/images/unsplash/backgrounds/pricing-bg.jpg'),
        description: 'Pricing page background'
      }
    ];
    
    const combinedImages = [...allImages, ...sectionImages];
    
    console.log(`Found ${combinedImages.length} website images to download`);
    
    // Download all images in parallel
    await Promise.all(combinedImages.map(image => {
      const localPath = image.path.replace('F:\\Project\\Ailes_travel\\east-african-gold-exchange\\', '');
      const absolutePath = path.join(__dirname, '..', localPath);
      return downloadImage(image.url, absolutePath)
        .catch(err => console.error(`Error downloading ${image.description || path.basename(image.path)}: ${err.message}`));
    }));
    
    console.log('✅ All website images downloaded successfully!');
  } catch (error) {
    console.error('❌ Error downloading website images:', error);
  }
}

// Run the script
downloadAllWebsiteImages();
