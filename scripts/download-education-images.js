// Education images downloader
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const educationImagesDir = path.join(__dirname, '..', 'public', 'images', 'education');
if (!fs.existsSync(educationImagesDir)) {
  fs.mkdirSync(educationImagesDir, { recursive: true });
}

// List of images to download
const educationImages = [
  {
    name: 'gold-history.jpg',
    url: 'https://images.unsplash.com/photo-1618501352097-15b9a3d6f81e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Historical gold artifacts and coins'
  },
  {
    name: 'gold-market.jpg',
    url: 'https://images.unsplash.com/photo-1610492219815-f76905b1c0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Gold market analysis chart'
  },
  {
    name: 'gold-purity.jpg',
    url: 'https://images.unsplash.com/photo-1574475347613-0a4a0a7ed39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Gold purity testing equipment'
  },
  {
    name: 'gold-mining.jpg',
    url: 'https://images.unsplash.com/photo-1605098293544-25f4c32344c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Gold mining operations'
  },
  {
    name: 'gold-info-1.jpg',
    url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Gold information and education resources'
  },
  {
    name: 'gold-bars-stacked.jpg',
    url: 'https://images.unsplash.com/photo-1578662996442-48f1845c835d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    description: 'Stacked gold bars'
  }
];

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${res.statusCode} ${res.statusMessage}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting download of education images...');
  
  for (const image of educationImages) {
    const filepath = path.join(educationImagesDir, image.name);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`File already exists: ${image.name}`);
      continue;
    }
    
    try {
      await downloadImage(image.url, filepath);
      console.log(`Successfully downloaded: ${image.name} - ${image.description}`);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error.message);
    }
  }
  
  console.log('Finished downloading education images!');
}

downloadAllImages();