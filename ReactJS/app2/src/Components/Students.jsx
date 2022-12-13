const { Component } = require("react");

class Students extends Component {
  constructor() {
    super();
    this.state = {
      showImages: true,
      welcome: "Hello All.. Welcome to ReactJS Training",
      studentDetails: {
        fname: "siva",
        lname: "kalyan",
        email: "siva@gmail.com",
      },
      subjects: ["HTML", "CSS", "Javascript", "AJAX", "ReactJS"],
      images: [
        "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        "https://cdn-icons-png.flaticon.com/512/919/919826.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        "https://cdn-icons-png.flaticon.com/512/1183/1183639.png",
        "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.welcome}</h2>
        <hr />
        <ul>
          {Object.values(this.state.studentDetails).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
        <hr />
        <ul>
          {this.state.subjects.map((val, i) => (
            <div key={i}>
              <h2>This is Subject</h2>
              <li>{val}</li>
            </div>
          ))}
        </ul>
        <div>
          {/* Ternory Operator
            syntax :{true && Code Execute} --(like If condition) */}
          {/* {this.state.showImages &&
            this.state.images.map((val, i) => (
              <img
                style={{ width: 200, height: 200 }}
                src={val}
                alt=""
                key={i}
              />
            ))} */}

            {/* Ternory Operator
            syntax :--
            {true ? Code Execute : other code} --(like If Else condition) */}
          {this.state.showImages ? (
            this.state.images.map((val, i) => (
              <img
                style={{ width: 200, height: 200 }}
                src={val}
                alt=""
                key={i}
              />
            ))
          ) : (
            <p>their are no images</p>
          )}
        </div>
      </div>
    );
  }
}

export default Students;
