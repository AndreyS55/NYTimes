import React, { Component } from 'react';
import style from './SearchForm.scss';

class SearchForm extends Component {

    render() {

        return (
            <div>
                <form>
                    <div>
                        <input type="text" placeholder={"Search..."}/>
                        <button type={"submit"}>Search</button>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="begin">Begin date</label>
                            <input type="date" id="begin"/>
                        </div>
                        <div>
                            <label htmlFor="end">End date</label>
                            <input type="date" id="end"/>
                        </div>
                    </div>
                </form>
            </div>
        );

    }

}

export default SearchForm;