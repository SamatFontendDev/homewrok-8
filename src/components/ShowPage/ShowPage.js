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
    
    showRequest(match.params.id);
  }

  render() {
    console.log(this.props);
    
    const { showInfo, isLoading, error } = this.props;
    if(!showInfo) return null
    console.log(showInfo)
    const { name, image, _embedded } = showInfo
    
    

    if (isLoading) return <p>Данные загружаются...</p>
    if (error) return <p>Произошла сетевая ошибка</p>

    return (
      <div>
       <p>{name}</p>
       <img src={image.medium} alt={name} />
       <div className={css.cast}>
          {_embedded.cast.map(elem => (
              <div>
                <p>{elem.person.name}</p>
                <img src={elem.person.image.medium} alt={elem.person.name} />
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