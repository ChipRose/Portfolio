import webppack from "webpack-stream";

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(webppack({
      mode: "development",
      output: {
        filename: "main.min.js",
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
}
