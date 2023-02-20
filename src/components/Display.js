import React from 'react'
import { connect } from 'react-redux'

const Display = ({count}) => {
    return (
        <div>판매된 고구마 {count}개</div>
    )
}

const mapSateToProps = (state) => {
    // state.default안에 count가 담겨져 있다.
    return {
        count: state.default.count
    }
}

export default connect(mapSateToProps)(Display)