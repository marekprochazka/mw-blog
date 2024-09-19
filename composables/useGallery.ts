import { images } from '~/composables/_data/images';

export function useGallery() {
  function getAll() {
    return images;
  }
  return {
    getAll,
  };
}
