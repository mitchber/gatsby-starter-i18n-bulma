import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Time from '../components/Time';

const PostListItem = ({ post }) => {
  return (
    <li key={post.fields.slug}>
      <Link to={post.fields.slug}>
        <header>
          <Time
            pubdate
            langKey={post.fields.langKey}
            date={post.frontmatter.date}
          />
          {post.frontmatter.title}
        </header>
        <p>{post.excerpt}</p>
      </Link>
    </li>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      langKey: PropTypes.string.isRequired
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }),
    excerpt: PropTypes.string.isRequired
  })
};

export default PostListItem;
