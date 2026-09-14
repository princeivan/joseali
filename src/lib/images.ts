/**
 * PLACEHOLDER PHOTOGRAPHY
 * ------------------------------------------------------------------
 * No client photography has been supplied yet. Every image on this
 * site is generated from this single helper so the whole site's
 * imagery can be replaced in one place once JoseAli Safaris provides
 * real photos of their vehicles, drivers, destinations and properties.
 *
 * `seed` should be a stable, descriptive string (e.g. "diani-beach")
 * so the same subject always gets the same placeholder image.
 *
 * To go live with real photography: drop files into /public/images
 * and change this function to return `/images/${seed}.jpg`.
 */
export function placeholderImage(seed: string, width = 1200, height = 800): string {
  // return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
  return `/images/${seed}.png`
}
