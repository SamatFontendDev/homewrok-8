// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React from 'react'
import css from './Search.module.css'
import {searchRequest} from '../../reducers/actions'
import {connect} from 'react-redux'
import ShowPreview from '../ShowPreview/ShowPreview'

class Search extends React.Component{
    state = {
        inputValue: ''
    }

    handleInput = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick = () => {
        this.props.searchRequest(this.state.inputValue)
    };

    render() {
        const {shows, isLoading, error} = this.props;

        if (isLoading) return <p>Выполняется поиск...</p>

        if (error) return <p>Ошибка поиска!</p>

        return(
            <div>
                <div className={css.previewList}>
                    <input value={this.state.inputValue} onChange={this.handleInput} type="text" placeholder="Название сериала" className={css.input + ' t-input'} />
                    <div className={css.buttonWrapper}>
                        <button onClick={this.handleClick} className={css.button + ' t-search-button'}>Найти</button>
                    </div>
                </div>
                <div className={css.searchPanel + ' t-search-result'}>
                    <div className="container">
                        {
                            shows.map(show => {
                                const {id} = show;
                                return <ShowPreview {...show} key={id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shows: state.search.shows,
        isLoading: state.search.isLoading,
        error: state.search.error
    }
};
const mapDispatchToProps = {searchRequest}

export default connect(mapStateToProps, mapDispatchToProps)(Search)