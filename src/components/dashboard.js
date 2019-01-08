import React from 'react';
import ReactTable from 'react-table';

// Custom component import
import Modal from './Modal';

const columns = [{
    columns:[
        {
            Header:"Name", 
            accessor:"name"
        },
        {
            Header:"Email",
            accessor: "email"
        }
    ]
  }]

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {name:"salla", email:"s@gmail.com"},
                {name:"salla2", email:"s@gmail.com"},
                {name:"salla3", email:"s@gmail.com"},
                {name:"salla4", email:"s@gmail.com"},
                {name:"salla5", email:"s@gmail.com"}
            ],
            modalOpen:false,
            selectedItem:''
        }
    }

    toggleModal =() =>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render(){
        return (
            <div>
                {this.state.modalOpen && <Modal selectedItem={this.state.selectedItem} toggleModal={this.toggleModal}/>}
                <ReactTable
                    data={this.state.data}
                    columns={columns}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                          onClick: (e, handleOriginal) => {
                          
                            console.log("It was in this row:", rowInfo.original);
                            this.setState({
                                selectedItem: rowInfo.original,
                                modalOpen: true
                            });
                            if (handleOriginal) {
                              handleOriginal();
                            }
                          }
                        };
                      }}
                />
            </div>
        )
    }
}


export default Dashboard;