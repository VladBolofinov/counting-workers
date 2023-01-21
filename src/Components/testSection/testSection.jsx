import './testSection.css';
import {Component} from "react";

class TestSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activ: false
        }
    }

    drawBlock = () => {
        this.setState(({activ}) => ({
            activ: !activ
        }))
    }
    render() {
        const {text, number} = this.props;
        const {activ} = this.state;
        let classnames = "block";
        if (activ) {
            classnames += ' activ';
        }
        return  (
            <div className="wrapper">
                <div className={classnames}>
                    <p>{+number + 1}{text}</p>
                    <button onClick={this.drawBlock} className="newBtn">Click Here</button>
                </div>
                <div className={classnames}>
                    <p>{+number + 2}{text}</p>
                    <button onClick={this.drawBlock} className="newBtn">Click Here</button>
                </div>
                <div className={classnames}>
                    <p>{+number + 3}{text}</p>
                    <button onClick={this.drawBlock}  className="newBtn">Click Here</button>
                </div>
            </div>
        )
    }

}

export default TestSection;