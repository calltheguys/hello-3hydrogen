import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default defineConfig({
  plugins: [hydrogen()],
  optimizeDeps: {
    include: [
      'react-three-fiber',
      '@react-three/fiber',
      'three',
      '@react-spring/three',
      '@react-three/drei',
      'three-stdlib',
      'react-use-measure',
      'react-merge-refs',
    ],
  },
});
