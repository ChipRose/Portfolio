import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import svgstore from "gulp-svgstore";
import rename from "gulp-rename";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  svgstore: svgstore,
  rename:rename
}
