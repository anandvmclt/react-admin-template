// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';



function Table(props) {
  
const { columns, data} = props;
const { SearchBar } = Search;

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc"
    }
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    }
  });

  return (
    <div className="col-md-8">
      <h5>React Bootstrap Table Next with Filter, Sorting and Pagination</h5>


<ToolkitProvider
  keyField="id"
  data={data}
  columns={columns}
  search>
  {
    props => (
      <div>
        <SearchBar />
        <hr />
              <BootstrapTable
        bootstrap4
        keyField="id"
        data={data}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
      />
      </div>
    )
  }
</ToolkitProvider>
    </div>
  );
}

export default Table;

// Documentation
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html



