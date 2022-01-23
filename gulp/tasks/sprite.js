export const sprite = () => {
  return app.gulp.src(app.path.src.sprite)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.svgstore({
      inlineSvg: true
    }))
    .pipe(app.plugins.rename("sprite.svg"))
    .pipe(app.gulp.dest(app.path.build.sprite))
    .pipe(app.plugins.browsersync.stream());
}
