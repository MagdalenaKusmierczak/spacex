type ArrowProps = {
  onClick?: () => void;
};

// In general - try to steer off default exports, whenever possible - use named ones, easier to work with and especially - refactor (renaming)
export default ArrowProps;

// Another remark - this looks like something that should lie next to the component. Try to keep component-specific types in them or next to them
