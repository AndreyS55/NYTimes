import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchArticles from '../../actions/index';
//import style from './SearchForm.scss';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            bdate: '',
            edate: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeBdate = this.handleChangeBdate.bind(this);
        this.handleChangeEdate = this.handleChangeEdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChangeBdate (event) {
        this.setState({bdate: event.target.value});
    }

    handleChangeEdate (event) {
        this.setState({edate: event.target.value});
    }

    handleClick(event) {
        this.props.dispatch(fetchArticles());
        event.preventDefault();
    }

    render() {
        let str = this.state.value.split(' ').join('+');
        let bdate = this.state.bdate.split('-').join('');
        let edate = this.state.edate.split('-').join('');
        const foo = () => '&q=' + str +'&begin_date=' + bdate + '&end_date=' + edate;

        return (
            <div>
                <form>
                    <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange}/>
                    <input type="button" value="Submit" onClick={this.handleClick}/>
                    <label>
                        Begin date
                        <input type="date" id="begin" value={this.state.bdate} onChange={this.handleChangeBdate}/>
                    </label>
                    <label>
                        End date
                        <input type="date" id="end" value={this.state.edate} onChange={this.handleChangeEdate}/>
                    </label>
                </form>
            </div>
        );

    }

}


const mapStateToProps = state => ({
    article: state.articles.items,
    loading: state.articles.loading,
    error: state.articles.error
});

export default connect(mapStateToProps)(SearchForm);