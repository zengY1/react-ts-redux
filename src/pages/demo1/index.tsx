import React from 'react';
import {connect} from 'react-redux';
import {changeCount,getTestData} from './action';
import {bindActionCreators} from "redux";
import {Button} from 'antd'

// const Step = Steps.Step;

/**
 * demo1
 */

//// @ts-ignore
// @connect(
// 	(state:any) => ({ demo1Store: state.demo1Store }),
// 	{ changeCount }
// )
class demo1 extends React.Component<IProps> {
    componentDidMount() {
    }

    add = () => {
        let demo1 = this.props.demo1Store;
        this.props.changeCount(demo1.count + 1);
    };

    dec = () => {
        this.props.changeCount(this.props.demo1Store.count - 1);
    };

    getData=()=>{
        this.props.getTestData()
    }
    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
                <span>{this.props.demo1Store.count}</span>
                <button onClick={this.dec}>-</button>
                <div>获取数据</div>
                <div>
                    <Button onClick={this.getData}>获取数据</Button>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: any) => {
    return {
        demo1Store: state.demo1Store
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        changeCount: changeCount,
        getTestData:getTestData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(demo1);
