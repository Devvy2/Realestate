import NavBar from '../components/navbar/Navbar';
import PropTypes from 'prop-types';


LayOut.propTypes = {
  children: PropTypes.node.isRequired,
};

function LayOut(props) {
  const { children } = props;
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {children}
    </div>
  );
}

export default LayOut;
