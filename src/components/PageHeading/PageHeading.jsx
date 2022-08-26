import PropTypes from 'prop-types';
import { Heading } from './PageHeading.styled';

export const PageHeading = ({ pageHeading }) => {
  return <Heading>{pageHeading}</Heading>;
};

PageHeading.propTypes = {
  pageHeading: PropTypes.string.isRequired,
};
