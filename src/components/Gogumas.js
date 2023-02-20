import React from 'react';
import { connect } from 'react-redux';
import { buyGoguma, refundGoguma } from '../redux/gogumas/actions'

const Gogumas = ({count, buyGoguma, refundGoguma}) => {
    // props 객체를 디스트럭쳐링 해서 사용하면 더 편리하다. 
    // (props) => ({count, buyGoguma, refundGoguma}) 

    return (
        <div className='items'>
            <h4>고구마 수: {count}</h4>
            <button onClick={() => buyGoguma()}>구매하기</button>
            <button onClick={() => refundGoguma()}>구매취소</button>
        </div>
    )
}

// state 불러오기 (connect의 첫 번째 인자에 넣어준다.)
const mapSateToProps = (state) => {
    // state.default안에 count가 담겨져 있다.
    return {
        count: state.default.count
    }
}

// action dispatch로 불러오기 (connect의 두 번째 인자에 넣어준다.)
// 방법 1)
// const mapDispatchToFunction = (dispatch) => {
//     return {
//         buyGoguma: () => dispatch(buyGoguma())
//     }
// }

// 방법 2)
const mapDispatchToFunction = {
    buyGoguma,
    refundGoguma
}

// connect로 state와 dispatch 함수를 <Gogumas />컴포넌트의 props에 바인딩해준다.
export default connect(mapSateToProps, mapDispatchToFunction)(Gogumas);
