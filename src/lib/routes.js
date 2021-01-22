const slugify = require('slugify');

/**
 * feature
 * @description Given the title, creates a feature path
 */

exports.feature = function (title) {
  const slug = slugify(title.toLowerCase());
  return `/feature/${slug}/`;
};
