import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
// ...
import './pagination.css'
const Table = (props) => {
const { SearchBar } = Search;
const { columns, data} = props;
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
     Showing { from } to { to } of { size } Results
  </span>
);

const options = {
  paginationSize: 4,
  pageStartIndex: 0,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: '25', value: 25
  }, {
    text: 'All', value: data.length
  }] 
};

return (
<div className='col-md-8'> 
 <ToolkitProvider
  keyField="id"
  data={ data }
  columns={ columns }
  search>
  {
    props => (
      <div className='naac-table'>
        <hr />
      
        <div className='naac-table-search'> 
        <SearchBar { ...props.searchProps } />
        </div>
        <BootstrapTable  { ...props.baseProps }
         keyField='id' data={ data } columns={ columns } pagination={ paginationFactory(options) } 
         striped /> 
      </div>
    )
  }
</ToolkitProvider>
</div>
)
}

export default Table