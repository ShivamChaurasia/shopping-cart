import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd';
import { connect } from 'react-redux'
import { getAllCategories, getSelectedCategories } from '../reducers/filters';
import { setSelectedCategories } from '../actions';

const CheckboxGroup = Checkbox.Group;

const FilterContainer = ({ categories, selectedCategories, setSelectedCategories }) => (
  <div className="filter-wrapper" style={{marginTop: 10}}>
    <CheckboxGroup
      options={categories}
      value={selectedCategories}
      onChange={(checkedList) => setSelectedCategories(checkedList)}
    />
  </div>
)

FilterContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  categories: getAllCategories(state.filters),
  selectedCategories: getSelectedCategories(state.filters)
})

export default connect(
  mapStateToProps,
  { setSelectedCategories }
)(FilterContainer)
