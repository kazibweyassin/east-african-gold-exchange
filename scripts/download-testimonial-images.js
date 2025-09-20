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

// Main function to download all testimonial images
async function downloadTestimonialImages() {
  try {
    console.log('Starting testimonial image downloads...');
    
    // Extract testimonial images from metadata
    const testimonialImages = metadata.testimonialImages || [];
    
    // Also get the generic testimonial images from the main section
    const mainTestimonialImages = [
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
      }
    ];
    
    const allImages = [...testimonialImages, ...mainTestimonialImages];
    
    console.log(`Found ${allImages.length} testimonial images to download`);
    
    // Download all images in parallel
    await Promise.all(allImages.map(image => {
      const localPath = image.path.replace('F:\\Project\\Ailes_travel\\east-african-gold-exchange\\', '');
      const absolutePath = path.join(__dirname, '..', localPath);
      return downloadImage(image.url, absolutePath)
        .catch(err => console.error(`Error downloading ${image.description}: ${err.message}`));
    }));
    
    console.log('✅ All testimonial images downloaded successfully!');
  } catch (error) {
    console.error('❌ Error downloading testimonial images:', error);
  }
}

// Run the script
downloadTestimonialImages();