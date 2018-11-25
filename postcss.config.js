class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
      ? require('postcss-purgecss')({
          content: ['./test/index.html'],
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ['html', 'js', 'vue']
            }
          ]
        })
      : function() {
          return [];
        }
  ]
};
