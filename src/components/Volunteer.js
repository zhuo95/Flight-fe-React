import React from "react";
import axios from "../base.js";
import StudentInRequest from "./StudentInRequest";
import Request from "./Request";
import Pagination from "./Pagination";

class Volunteer extends React.Component {

    state = {
        volId: null,
        requests: [],
        requestStudentId: null,
        currentPage: 0,
        totalPages: null
    }

    componentWillMount() {
        this.setState({ volId: this.props.volunteerId });
        if(this.state.requests.length <= 0) {
            this.getRequests(0);
        }
    }

    handlePagination = (pageIndex) => {
        this.getRequests(pageIndex);
    }

    getRequests = (pageIndex) => {
        pageIndex = pageIndex? pageIndex : this.state.currentPage;
        axios.get(`/flight/?pageIndex=${pageIndex}&pageSize=2`
        )
        .then(res => {
            console.log(res.data);
            if(res.data.status === 0) {
                this.setState({ requests: res.data.data.content });
                this.setState({ currentPage: res.data.data.number });
                this.setState({ totalPages: res.data.data.totalPages });
            }
            console.log(this.state.requests);
        })
    }

    sendInterest = (requestId) => {
        axios.patch(`/flight/${requestId}`
        )
        .then(res => {
            if(res.data.status === 0) {
                this.getRequests();
            } else {
                alert(res.data.msg);
            }
        })
    }

    removeInterest = (requestId) => {
        axios.delete(`/flight/like/${requestId}`
          )
          .then(res => {
              if(res.data.status === 0) {
                this.getRequests();
              } else {
                alert(res.data.msg);
              }
          })
    }

    checkStudent = (requestUserId) => {
        this.setState({ requestStudentId: requestUserId });
    }

    render() {

        if(this.state.requestStudentId) {
            return (
                <StudentInRequest 
                    studentId={this.state.requestStudentId}
                    checkStudent={this.checkStudent}
                />
            );
        } else {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            {Object.keys(this.state.requests).map(key => (
                                <Request
                                    key={key}
                                    details={this.state.requests[key]}
                                    sendInterest={this.sendInterest}
                                    removeInterest={this.removeInterest}
                                    checkStudent={this.checkStudent}
                                />
                            ))}
                        </div>
                        <Pagination 
                            currentPage={this.state.currentPage}
                            totalPages={this.state.totalPages}
                            handlePagination={this.handlePagination}
                        />
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Volunteer;