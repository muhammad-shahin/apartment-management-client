import PropTypes from 'prop-types';
import { useEffect } from 'react';

const PageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title, window.location.pathname]);
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
