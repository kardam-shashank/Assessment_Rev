import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.selectedItem);
        let {name, email} = this.props.selectedItem;
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.props.toggleModal}>&times;</span>
                    <div>
                        <div>Name : {name}</div>
                        <div>Email : {email}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Modal;