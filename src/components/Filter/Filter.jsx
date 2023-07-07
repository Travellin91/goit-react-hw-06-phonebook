import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import '../Filter/filter.css'; 

const Filter = ({ value, onChange }) => (
  <label className="filter-label">
    Find contacts by name
    <input className="filter-input" type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
