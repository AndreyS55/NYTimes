import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import ArticleList from "../ArticleList/ArticleList";

const Container = () => (
    <div className={'Container'}>
        <SearchForm />
        <ArticleList />
    </div>
);

export default Container;