import webp from "gulp-webp";

export const createWebp = () => {
  return app.gulp.src(app.path.src.webp)
    .pipe(webp({
      quality: 90
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
}

