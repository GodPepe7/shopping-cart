import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-12 py-2 w-max self-center text-theme-white bg-theme-black shadow-md uppercase tracking-wider shadow-theme-white/50 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-2 focus:scale-110"
    >
      {children}
    </button>
  );
}

export default Button;
