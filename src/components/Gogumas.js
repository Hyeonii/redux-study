import React from 'react';
import { connect } from 'react-redux';
import { buyGoguma, refundGoguma } from '../redux/gogumas/actions'

const Gogumas = ({count, buyGoguma, refundGoguma}) => {

    return (
        <div className='items'>
            <h1>🍠</h1>
            <h4>고구마 수량: {count}</h4>
            <button onClick={() => buyGoguma()}>구매하기</button>
            <button onClick={() => refundGoguma()}>구매취소</button>
        </div>
    )
}


const mapSateToProps = ({goguma}) => {

    return {
        count: goguma.count
    }
}

const mapDispatchToFunction = {
    buyGoguma,
    refundGoguma
}

export default connect(mapSateToProps, mapDispatchToFunction)(Gogumas);
