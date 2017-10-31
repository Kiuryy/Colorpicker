(() => {
    "use strict";

    global.build = new function () {

        /**
         * Parses the scss files and copies the css files to the dist directory
         *
         * @returns {Promise}
         */
        let css = () => {
            return new Promise((resolve) => {
                func.minify([ // parse scss files
                    path.src + 'scss/*.scss'
                ], path.dist + "css/").then(() => {
                    resolve();
                });
            });
        };

        /**
         * Copies the images to the dist directory
         *
         * @returns {Promise}
         */
        let img = () => {
            return new Promise((resolve) => {
                func.copy([path.src + "img/**/*"], [path.src + "**/*.xcf"], path.dist, false).then(() => {
                    resolve();
                });
            });
        };

        /**
         * Parses the js files and copies them to the dist directory
         *
         * @returns {Promise}
         */
        let js = () => {
            return new Promise((resolve) => {
                func.minify([
                    path.src + 'js/*.js'
                ], path.dist + "js/").then(() => {
                    resolve();
                });
            });
        };

        /**
         *
         */
        this.release = () => {
            return new Promise((resolve) => {
                Promise.all([
                    js(),
                    css(),
                    img()
                ]).catch(reason => {
                    throw reason;
                }).then(() => {
                    resolve();
                });
            });
        };
    };
})();