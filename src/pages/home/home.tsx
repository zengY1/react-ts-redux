import * as React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
interface IState {
    orderList: OptionList[],
    orderStart: string,
    orderEnd: string,
    orderType: number,
    initOrderArr: any[],
    totalStart:string,
    totalEnd:string,
    totalType:number|string
}
interface OptionList {
    id: number,
    name: string,
}
class Home extends React.Component<IProps, IState>{
 
    render() {
        return (
           <div>
               首页
           </div>
        )
    }
}
let mapStateToProps = (state: any) => {
    return {
        homeStore: state.homeStore
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        // queryDataOverviewAction: queryDataOverviewAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);