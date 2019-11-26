import * as React from 'react'
import {Pagination} from 'antd'
import './index.less'
interface PProps{
    total:number,
    onSizeChange:any,
    onPageChange:any
}
class Paginations extends React.Component<PProps>{
render(){
    const {total,onPageChange,onSizeChange}=this.props
    return(
        <div className='paginationStyles'>
      <Pagination
        showTotal={total => `查询结果 ${total} 条`}
        onChange={onPageChange}
        onShowSizeChange={onSizeChange}
        showSizeChanger
        showQuickJumper
        defaultCurrent={1}
        total={total}
      />
    </div>
    )
}
}
export default Paginations