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
                </div>
                <div className={classnames}>
                </div>
                <div className={classnames}>
                </div>
            </div>
        )
    }
}

export default TestSection;