import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCurrentUser,
  getCategoriesRequest,
  setCurrentCategory
} from '../actions';

class CategoryList extends Component {
  componentWillMount() {
    this.props.getCategoriesRequest(this.props.current.user.id);
  }

  setCategory(category) {
    this.props.setCurrentCategory(category);
  }

  renderCategories() {
    const categories = this.props.categories;

    if (!categories.length) {
      return 'No categories.';
    }

    return categories.map((category) => {
      let categoryInfo = {
        id: category._id,
        name: category.name
      }

      return (
        <li key={ category._id } className='grid-links-block'>
          <Link
            to={ `${ category.name }` }
            onClick={ () => this.setCategory(categoryInfo) }>
            <div className="grid-link-container">
              <span className='grid-link-icon'>x</span>
              <span className='grid-link-name'>{ category.name }</span>
            </div>
          </Link>
        </li>
      );
    })
  }

  render() {
    return (
      <ul className='grid-links'>
        { this.renderCategories() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrentUser,
    getCategoriesRequest,
    setCurrentCategory
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);