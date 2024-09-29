import css from './Container.module.css';
import PropTypes from 'prop-types';

/**
 * @param
 * className:string -> ".selector1 .selector2 ..."
 * type:string -> "container"(default) | "section"
 * children: React nodes
 */

function Container({ className, type = 'container', children }) {
  if (type === 'section') {
    return <section className={`${className || ''} ${css[type]}`}>{children}</section>;
  } 

  return <div className={`${className || ""} ${css[type]}`}>{children}</div>;
  
}

export default Container;

Container.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['container', 'section']),
  children: PropTypes.node.isRequired,
};
