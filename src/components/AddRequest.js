import React from "react";

class AddRequest extends React.Component {

    airportRef = React.createRef();
    destinationRef = React.createRef();
    timeRef = React.createRef();
    flightInfoRef = React.createRef();
    descriptionRef = React.createRef();
    numOfPeopleRef = React.createRef();
    baggageRef = React.createRef();

    createRequest = event => {
      // stop the form from submitting
      event.preventDefault();

      const request = {
          airport: this.airportRef.value.value,
          destination: this.destinationRef.value.value,
          time: this.timeRef.value.value,
          flightInfo: this.flightInfoRef.value.value,
          description: this.descriptionRef.value.value,
          numOfPeople: parseFloat(this.numOfPeopleRef.value.value),
          baggage: parseFloat(this.baggageRef.value.value)
      };

      console.log(request);

      this.props.addRequest(request);

    };

    render() {
        return (
          <form className="fish-edit" onSubmit={this.createRequest}>
            <select name="airport" ref={this.airportRef}>
              <option value="DCA">DCA</option>
              <option value="IAD">IAD</option>
              <option value="DUL">DUL</option>
            </select>
            <input
              name="destination"
              ref={this.destinationRef}
              type="text"
              placeholder="Destination"
            />
            <input
              name="time"
              ref={this.timeRef}
              type="text"
              placeholder="Arrival Time"
            />
            <input
              name="flightInfo"
              ref={this.flightInfoRef}
              type="text"
              placeholder="Flight Info"
            />
            <textarea
              name="description" 
              ref={this.descriptionRef}
              placeholder="Description" 
            />
            <select name="numOfPeople" ref={this.numOfPeopleRef}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select name="baggage" ref={this.baggageRef}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button type="submit">+ Add Request</button>
          </form>
        );
    }
}

export default AddRequest;