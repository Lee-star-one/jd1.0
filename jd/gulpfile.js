var gulp=require("gulp")
var uglify=require("gulp-uglify")
var imagemin=require("gulp-imagemin")
var concat=require("gulp-concat")
var less=require("gulp-less")
var browserSync=require("browser-sync")


gulp.task("less",function(){
    return gulp.src("css/*.less")
    .pipe(less())
    .pipe(gulp.dest("dest/bulid/css"))
})

gulp.task("yasuo"),function(){
    return gulp.src("js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest(dest/bulid/js))
}

gulp.task("image",function(){
    return gulp.src("images/*.jpg")
    .pipe(imagemin())
    .pipe(gulp.dest("dest/bulid/image"))
})

gulp.task("run", ()=>{
    browserSync.init({
        server:"./"
    });
    gulp.watch("*").on("change",browserSync.reload);
    gulp.watch("css/*.less").on("change",function(){
        gulp.src(["css/*.less"])
        .pipe(less())
        .pipe(gulp.dest("dest/css"));
        browserSync.reload
    })
    gulp.watch("js/*.js").on("change",function(){
        gulp.src(["js/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("dest/js"));
        browserSync.reload
    })
    gulp.watch("images/*.jpg").on("change",function(){
        gulp.src(["images/*.jpg"])
        .pipe(imagemin())
        .pipe(gulp.dest("dest/images"));
        browserSync.reload
    })
})
