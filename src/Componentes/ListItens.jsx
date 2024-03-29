/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListItens extends Component {
  render() {
    const { search, server, server: { theme } } = this.props;
    return (
      <div>
        <div className="flex justify-around flex-wrap">
          {search.valueSearch.map((e, i) => (
            <Link
              to={ `/${e.id}` }
              key={ i }
            >
              <div
                className={ `w-96 text-center h-72 flex
              flex-wrap justify-center items-center p-1
              ${server[theme].cards} my-12 itemContainer` }
              >
                <img
                  src={ e.thumbnail }
                  alt={ e.title }
                  className={ e.notFound ? e.notFound : 'w-44' }
                />
                <h2 className="w-full">
                  {e.title}
                </h2>
                <h2 className="itemTitle w-full ">
                  R$
                  {(+e.price).toFixed(2)}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  server: state.server,
});

export default connect(mapStateToProps)(ListItens);
