const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const createDirectoryIfNotExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
};

// Function to download an image
const downloadImage = (url, filePath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image. Status Code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filePath}`);
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
};

// Main function to download all images
async function downloadAllImages() {
  try {
    console.log('Starting to download images from Unsplash...');
    
    // Define the base directory for images
    const baseDir = path.join(__dirname, '../public/images/unsplash');
    
    // Define subdirectories
    const dirs = {
      base: baseDir,
      products: path.join(baseDir, 'products'),
      testimonials: path.join(baseDir, 'testimonials'),
      backgrounds: path.join(baseDir, 'backgrounds')
    };
    
    // Create all directories
    Object.values(dirs).forEach(dir => createDirectoryIfNotExists(dir));
    
    // Define all images to download with their respective Unsplash URLs and target paths
    const imagesToDownload = [
      // Hero background
      {
        url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d',
        path: path.join(dirs.base, 'gold-background.jpg'),
        description: 'Hero background (gold texture)'
      },
      
      // Product images
      {
        url: 'https://images.unsplash.com/photo-1624365169198-31367163a3d5',
        path: path.join(dirs.products, 'gold-bar.jpg'),
        description: 'Gold bar image'
      },
      {
        url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7',
        path: path.join(dirs.products, 'gold-nuggets.jpg'),
        description: 'Gold nuggets image'
      },
      {
        url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
        path: path.join(dirs.products, 'gold-coins.jpg'),
        description: 'Gold coins image'
      },
      
      // Testimonial profile images
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        path: path.join(dirs.testimonials, 'testimonial-1.jpg'),
        description: 'Business person 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        path: path.join(dirs.testimonials, 'testimonial-2.jpg'),
        description: 'Business person 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
        path: path.join(dirs.testimonials, 'testimonial-3.jpg'),
        description: 'Business person 3'
      },
      
      // Certification and CTA backgrounds
      {
        url: 'https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa',
        path: path.join(dirs.backgrounds, 'certification-bg.jpg'),
        description: 'Certification background'
      },
      {
        url: 'https://images.unsplash.com/photo-1534470397273-a1c5311d09d2',
        path: path.join(dirs.backgrounds, 'cta-bg.jpg'),
        description: 'CTA background'
      }
    ];
    
    // Download all images
    console.log(`Starting download of ${imagesToDownload.length} images...`);
    
    for (const image of imagesToDownload) {
      console.log(`Downloading ${image.description}...`);
      try {
        await downloadImage(image.url, image.path);
      } catch (err) {
        console.error(`Failed to download ${image.description}: ${err.message}`);
      }
    }
    
    console.log('All downloads completed!');
    
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

// Run the download function
downloadAllImages().catch(console.error);