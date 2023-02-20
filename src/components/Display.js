import React from 'react'
import { connect } from 'react-redux'

const Display = ({count}) => {
    return (
        <h5>판매 예정 고구마 {count}개</h5>
    )
}

const mapSateToProps = ({goguma}) => {

    return {
        count: goguma.count
    }
}

export default connect(mapSateToProps)(Display)