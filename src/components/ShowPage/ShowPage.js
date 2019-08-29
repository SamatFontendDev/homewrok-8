// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../reducers/actions';
import css from './ShowPage.module.css';

class ShowPage extends Component {
  componentDidMount() {
    const { match, showRequest } = this.props;
    const { id } = match.params;

    showRequest(id);
  }

  render() {
    console.log(this.props);
    
    const { show, isLoading, error } = this.props;
    const { name, image, summary, persons } = showInfo;

    if (isLoading) return <p>Данные загружаются...</p>
    if (error) return <p>Произошла сетевая ошибка</p>

    return (
      <div>
        <p>{name}</p>
        {image && <img src={image} alt={name}/>}
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div className={css.cast}>
          {persons.map(item => (
            <div key={item.id} className="t-person">
              <p>{item.name}</p>
              {image && <img src={item.image.medium} alt={name}/>}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        showInfo: state.shows.showInfo,
        isLoading: state.shows.isLoading
    };
};
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);