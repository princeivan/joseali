import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

// Compose existing photography and the site logo; no generated photography.
const images = [
  ['public/images/joseali-og.jpg', 'public/images/gallery/vehicle/vehicle-5.png', 'Kenya safaris & coastal tours'],
  ['public/images/social/tours/coastal-getaway.jpg', 'public/images/heroes/coastal-getaway-hero.jpg', 'Coastal Getaway'],
  ['public/images/social/tours/tsavo-safari.jpg', 'public/images/heroes/tsavo-safari-hero.jpg', 'Tsavo Bush Safari'],
  ['public/images/social/tours/amboseli-safari.jpg', 'public/images/heroes/amboseli-hero.jpg', 'Amboseli Safari'],
  ['public/images/social/tours/maasai-mara-safari.jpg', 'public/images/heroes/maasai-mara-hero.jpg', 'Maasai Mara Safari'],
  ['public/images/social/tours/mombasa-city-experience.jpg', 'public/images/heroes/mombasa-hero.jpg', 'Mombasa City Experience'],
  ['public/images/social/tours/wasini-island-experience.jpg', 'public/images/heroes/wasini-island-hero.jpg', 'Wasini Island Experience'],
];

async function main() {
  const logo = await sharp('public/images/logo.png').resize(72, 72, {fit: 'contain', background: '#ffffff'}).png().toBuffer();
  for (const [output, source, subtitle] of images) {
    const escapedSubtitle = subtitle.replace(/&/g, '&amp;');
    const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect y="470" width="1200" height="160" fill="#102e47" fill-opacity="0.96"/>
      <rect y="470" width="1200" height="5" fill="#16a34a"/>
      <rect x="40" y="510" width="80" height="80" rx="4" fill="white"/>
      <text x="145" y="548" fill="white" font-family="sans-serif" font-size="40" font-weight="700">JoseAli Tours</text>
      <text x="145" y="585" fill="#cde9dc" font-family="sans-serif" font-size="25">${escapedSubtitle}</text>
    </svg>`);
    await fs.mkdir(path.dirname(output), {recursive: true});
    await sharp(source).rotate().resize(1200, 630, {fit: 'cover'})
      .composite([{input: overlay}, {input: logo, left: 44, top: 514}])
      .jpeg({quality: 88}).toFile(output);
    console.log(output);
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
