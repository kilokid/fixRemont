import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import gulpLess from 'gulp-less';

import { DIST_DIR, SOURCE_DIR } from './const.js';

export const styles = () =>
  gulp.src(`${SOURCE_DIR}/less/style.less`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(gulpLess())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(`${DIST_DIR}/css`))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(`${DIST_DIR}/css`))
    .pipe(browserSync.stream());
