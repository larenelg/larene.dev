module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/img');

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src'
        }
    }
};
