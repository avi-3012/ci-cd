import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rollup/plugin-babel';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react({
        presets: [
          '@babel/preset-react',
          [ 
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
      }),babel()],
  };
});