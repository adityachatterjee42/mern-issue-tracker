const contentNode = document.getElementById('contents');
import IssueAdd from './IssueAdd.jsx' 
import IssueFilter from './IssueFilter.jsx'
import IssueList from './IssueList.jsx'


ReactDOM.render(<IssueList />, contentNode);    // Render the component inside the content Node