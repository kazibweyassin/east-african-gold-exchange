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
    
    // Define the base directories for different image categories
    const productImagesDir = path.join(__dirname, '../public/images/products');
    const testimonialImagesDir = path.join(__dirname, '../public/images/testimonials');
    const securityImagesDir = path.join(__dirname, '../public/images/security');
    const educationImagesDir = path.join(__dirname, '../public/images/education');
    
    // Create all directories
    createDirectoryIfNotExists(productImagesDir);
    createDirectoryIfNotExists(testimonialImagesDir);
    createDirectoryIfNotExists(securityImagesDir);
    createDirectoryIfNotExists(educationImagesDir);
    
    // Define all images to download with their respective Unsplash URLs and target paths
    const imagesToDownload = [
      // Product images
      {
        url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1200',
        path: path.join(productImagesDir, 'gold-bar-1.jpg'),
        description: 'Gold bar on dark background'
      },
      {
        url: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=1200',
        path: path.join(productImagesDir, 'gold-coins-1.jpg'),
        description: 'Stack of gold coins'
      },
      {
        url: 'https://images.unsplash.com/photo-1610375461528-1e83d5e99e7e?q=80&w=1200',
        path: path.join(productImagesDir, 'gold-nuggets-1.jpg'),
        description: 'Gold nuggets and flakes'
      },
      {
        url: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200',
        path: path.join(productImagesDir, 'gold-jewelry-1.jpg'),
        description: 'Gold jewelry pieces'
      },
      {
        url: 'https://images.unsplash.com/photo-1624365169198-28394fad2357?q=80&w=1200',
        path: path.join(productImagesDir, 'gold-bars-2.jpg'),
        description: 'Multiple gold bars stacked'
      },
      {
        url: 'https://images.unsplash.com/photo-1628934231236-04e0c2476e5d?q=80&w=1200',
        path: path.join(productImagesDir, 'gold-investment-1.jpg'),
        description: 'Gold investment concept'
      },
      
      // Testimonial profile images
      {
        url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800',
        path: path.join(testimonialImagesDir, 'david-chen.jpg'),
        description: 'Professional businessman for David Chen testimonial'
      },
      {
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
        path: path.join(testimonialImagesDir, 'sarah-johnson.jpg'),
        description: 'Professional woman for Sarah Johnson testimonial'
      },
      {
        url: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=800',
        path: path.join(testimonialImagesDir, 'michael-okafor.jpg'),
        description: 'African businessman for Michael Okafor testimonial'
      },
      {
        url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800',
        path: path.join(testimonialImagesDir, 'elena-petrova.jpg'),
        description: 'Professional woman for Elena Petrova testimonial'
      },
      {
        url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800',
        path: path.join(testimonialImagesDir, 'rajiv-patel.jpg'),
        description: 'Indian businessman for Rajiv Patel testimonial'
      },
      {
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800',
        path: path.join(testimonialImagesDir, 'aisha-mohammed.jpg'),
        description: 'Middle Eastern woman for Aisha Mohammed testimonial'
      },
      
      // Security-related images
      {
        url: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200',
        path: path.join(securityImagesDir, 'vault.jpg'),
        description: 'Secure vault for gold storage'
      },
      {
        url: 'https://images.unsplash.com/photo-1558002038-2f2225c4a854?q=80&w=1200',
        path: path.join(securityImagesDir, 'security-system.jpg'),
        description: 'Modern security system'
      },
      {
        url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200',
        path: path.join(securityImagesDir, 'transaction-security.jpg'),
        description: 'Secure transaction concept'
      },
      
      // Educational images
      {
        url: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1200',
        path: path.join(educationImagesDir, 'gold-info-1.jpg'),
        description: 'Gold investment education'
      },
      {
        url: 'https://images.unsplash.com/photo-1544711716-983afa11c6d5?q=80&w=1200',
        path: path.join(educationImagesDir, 'gold-history.jpg'),
        description: 'Historical gold artifacts'
      },
      {
        url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200',
        path: path.join(educationImagesDir, 'gold-market.jpg'),
        description: 'Gold market analysis chart'
      },
      {
        url: 'https://images.unsplash.com/photo-1605266373617-0ffe6b171e63?q=80&w=1200',
        path: path.join(educationImagesDir, 'gold-mining.jpg'),
        description: 'Ethical gold mining operation'
      }
    ];
    
    // Download all images
    console.log(`Starting download of ${imagesToDownload.length} images for East African Gold Exchange...`);
    
    for (const image of imagesToDownload) {
      console.log(`Downloading ${image.description}...`);
      try {
        await downloadImage(image.url, image.path);
      } catch (err) {
        console.error(`Failed to download ${image.description}: ${err.message}`);
      }
    }
    
    // Create a metadata file with image information
    const metadata = {
      productImages: imagesToDownload.filter(img => img.path.includes('products')),
      testimonialImages: imagesToDownload.filter(img => img.path.includes('testimonials')),
      securityImages: imagesToDownload.filter(img => img.path.includes('security')),
      educationImages: imagesToDownload.filter(img => img.path.includes('education')),
    };
    
    fs.writeFileSync(
      path.join(__dirname, '../public/images/image-metadata.json'),
      JSON.stringify(metadata, null, 2)
    );
    
    console.log('📝 Image metadata file created.')
    
    console.log('All downloads completed!');
    
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

// Run the download function
downloadAllImages().catch(console.error);