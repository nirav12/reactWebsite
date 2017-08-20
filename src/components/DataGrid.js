import React,{Component} from 'react';
import {connect} from 'react-redux';
const ReactDataGrid = require('react-data-grid');


function mapStateToProps(state){
    return{
        rowData: state.rowData
    }  
}

const mapDispatchToProps= {


}

export default connect(mapStateToProps,mapDispatchToProps) (class DataGrid extends Component{

constructor(props){
    super(props);
    this.rowGetter = this.rowGetter.bind(this);
}

rowGetter(i) {
    const {rowData} = this.props;
    return rowData[i];
}

render(){
    const {rowData,Columns} = this.props;
    return (
            <ReactDataGrid
            enableCellSelect={true}
            columns={Columns}
            rowGetter={this.rowGetter}
            rowsCount={rowData.length}
            minHeight={500}
           // onGridRowsUpdated={this.handleGridRowsUpdated} 
            />
        );
    }

});