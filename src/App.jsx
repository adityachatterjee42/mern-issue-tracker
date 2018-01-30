const contentNode = document.getElementById('contents');
import IssueAdd from './IssueAdd.jsx'; 
import IssueFilter from './IssueFilter.jsx';
import IssueList from './IssueList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<IssueList />, contentNode);    // Render the component inside the content Node

if(module.hot){
    module.hot.accept();
}