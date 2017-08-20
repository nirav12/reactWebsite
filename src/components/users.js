import React,{Component} from 'react';
import DataGrid from './DataGrid';
import {connect} from 'react-redux';
import {fetchData} from '../actions/actions';


function mapStateToProps(state){
    return {
        rowData:state.rowData    
    }

}

const mapDispatchToProps= {
    fetchData
}

 function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  }


function createRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)]
      });
    }
    return rows;
  }

export default connect(mapStateToProps,mapDispatchToProps) (class user extends Component{
    
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.props.fetchData('https://jsonplaceholder.typicode.com/users');
    }

    render(){
        let columns,grid,gridDisplay,newRowData,updatedColumns,updatedCols=[];
        const {rowData} = this.props;
        if(rowData.length > 0 ){
            columns=Object.keys(rowData[0]);
            for(let i=0;i<columns.length;i++)
            {
                if(columns[i] != "company" && columns[i] != 'address') {
                    var obj = {
                        key:columns[i],
                        name:columns[i],
                        editable:true
                    }
                    updatedCols.push(obj);
                }
            }
        }

       /* if(rowData.length > 0 ){
            columns = [
            { key: 'id', name: 'ID',editable: true },
            { key: 'name', name: 'Name',editable: true },
            { key: 'username', name: 'username',editable: true },
            { key: 'email', name: 'email',editable: true },
            { key: 'phone', name: 'phone',editable: true },
            { key: 'website', name: 'website',editable: true }
          ];
        } */

        if (rowData.length > 0) {
                gridDisplay = (<DataGrid 
                                Columns={updatedCols} />);
        } else {
                gridDisplay = null;
        }

        return (
            <div>
             {gridDisplay}
            </div>
        );
    }


});