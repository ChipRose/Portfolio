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
    fonts: `${buildFolder}/fonts`,
  },
  src: {
    js: `${sourceFolder}/js/main.js`,
    images: `${sourceFolder}/img/**/*.{jpg,png,svg}`,
    webp: `${sourceFolder}/img/**/*.{jpg,jpeg,png}`,
    sprite: `${sourceFolder}/img/icons/*.svg`,
    nosprite: `!${sourceFolder}/img/icons/*.svg`,
    scss: `${sourceFolder}/sass/style.scss`,
    html: `${sourceFolder}/*.html`,
    fonts: `${sourceFolder}/fonts/**.*`,
  },
  watch: {
    js: `${sourceFolder}/**/*.js`,
    images: `${sourceFolder}/img/**/*.{jpg,png,webp,svg}`,
    scss: `${sourceFolder}/**/*.scss`,
    html: `${sourceFolder}/**/*.html`,
    fonts: `${sourceFolder}/fonts/**.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  rootFolder: rootFolder,
  ftp: ""
}
