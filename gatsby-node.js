const path = require('path');
const _ = require('lodash');
const config = require('./src/config').default;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === 'MarkdownRemark' &&
    _.has(node, 'frontmatter') &&
    _.has(node.frontmatter, 'title')
  ) {
    const slug = `${_.kebabCase(node.frontmatter.title)}`;
    createNodeField({ node, name: 'slug', value: slug });
  }
};

