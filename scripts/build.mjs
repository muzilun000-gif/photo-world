import {build} from 'esbuild';
await build({entryPoints:['src/main.js'],outfile:'app.js',bundle:true,format:'iife',minify:true,target:'es2019',platform:'browser'});
console.log('Built app.js. Keep its cache version in index.html current when publishing.');
