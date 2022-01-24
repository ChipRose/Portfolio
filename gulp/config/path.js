import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./build";
const sourceFolder = "./source";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files`,
  },
  src: {
    js: `${sourceFolder}/js/main.js`,
    images: `${sourceFolder}/img/**/*.{jpg,png,svg}`,
    webp: `${sourceFolder}/img/**/*.{jpg,jpeg,png}`,
    sprite: `${sourceFolder}/img/icons/*.svg`,
    nosprite: `!${sourceFolder}/img/icons/*.svg`,
    scss: `${sourceFolder}/sass/style.scss`,
    html: `${sourceFolder}/*.html`,
    files: `${sourceFolder}/files/**.*`,
  },
  watch: {
    js: `${sourceFolder}/**/*.js`,
    images: `${sourceFolder}/img/**/*.{jpg,png,webp,svg}`,
    scss: `${sourceFolder}/**/*.scss`,
    html: `${sourceFolder}/**/*.html`,
    files: `${sourceFolder}/files/**.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  rootFolder: rootFolder,
  ftp: ""
}
