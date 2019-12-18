import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as detailsAction from './action/detailsAction';


class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {
            technology: '',
            gender: ' '
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onClick(e) {
        this.setState({ technology: e.target.value ? e.target.value : ""});
    }
    onSelect(e) {
        this.setState({ gender: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let detail = {
            clientname: this.refs.name.value,
            address: this.refs.address.value,
            city: this.refs.city.value,
            statename: this.refs.statename.value,
            technology: this.state.technology,
            gender: this.state.gender

        }
        this.props.createDetail(detail);
        this.refs.name.value = '';
        this.refs.address.value = '';
        this.refs.city.value = '';
        this.refs.statename.value = '';
        this.setState({ city: '' });
        this.setState({ statename: '' });
        this.setState({ technology: '' });
        this.setState({ gender: '' });


    }

    view(data, index) {
        return (
            <div className="row">
                <div className="col-md-10">
                    <li key="index" className="list-group-item list-group-item-action">
                        <strong> Client Name : </strong>{data.clientname}<br />
                        <strong> Technology  : </strong>{data.technology}<br />
                        <strong> Address     : </strong>{data.address}<br />
                        <strong> City        : </strong>{data.city}<br />
                        <strong> State       : </strong>{data.statename}<br />
                        <strong> Gender      : </strong>{data.gender}<br />
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.deleteDetail(e, index)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        )

    }

    deleteDetail(e, index) {
        e.preventDefault();
        this.props.deleteDetail(index);
    }

    render() {

        return (
            <div className="container">
                <h2>Client Details</h2>
                <hr />
                <h4>Form</h4>
                <form onSubmit={this.handleSubmit}>

                    <div className="row" >
                        <div className="form-group col-md-6">
                            <label for="text"><b>Client Name</b></label>
                            <input type="text" className="form-control" name="clientname" ref="name" onChange={this.handleChange} />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputTechnology"><b>Technology</b></label>
                            <select for="technology" className="form-control" id="inputTechnology" name="technology" onChange={this.onClick} value={this.state.technology}>
                                <option>Select</option>
                                <option>Angular</option>
                                <option>React</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="inputAddress"><b>Address</b></label>
                        <input type="text" className="form-control" name="address" ref="address" id="inputAddress" onChange={this.handleChange} />
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label for="inputCity"><b>City</b></label>
                            <input type="text" className="form-control" name="city" ref="city" id="inputCity" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputCity"><b>State</b></label>
                            <input type="text" className="form-control" name="statename" ref="statename" id="inputState" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputAddress"><b>Gender</b></label> <br />
                            <input type="radio" name="gender" onChange={this.onSelect} value="male" checked={this.state.gender === "male"} /> Male
                            <input type="radio" name="gender" onChange={this.onSelect} value="female" checked={this.state.gender === "female"} /> Female
                            </div>
                    </div>

                    <input type="submit" className="btn btn-success btn-sm" value="ADD DETAIL" />
                </form>
                <hr />

                {<ul className="list-group">
                    {this.props.details.map((detail, i) => this.view(detail, i))}
                </ul>}

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.details
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createDetail: detail => dispatch(detailsAction.createDetail(detail)),
        deleteDetail: index => dispatch(detailsAction.deleteDetail(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
