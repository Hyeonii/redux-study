import React, { useState } from "react";
import { connect } from "react-redux";
import { buyGoguma, refundGoguma } from "../redux";

const Gogumas = ({ count, buyGoguma, refundGoguma }) => {
    const [number, setNumber] = useState(1);

    return (
        <div className="items">
            <h1>🍠</h1>
            <h4>전체 고구마 수량: {count}</h4>
            <h5>원하는 수량</h5>
            {/* 수량 적용하면 왜 Nah 되니 ???? */}
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => buyGoguma(number)}>구매하기</button>
            <button onClick={() => refundGoguma()}>구매취소</button>
        </div>
    );
};

const mapSateToProps = ({ goguma }) => {
    return {
        count: goguma.count,
    };
};

const mapDispatchToFunction = {
    buyGoguma: (number) => buyGoguma(number),
    refundGoguma,
};

export default connect(mapSateToProps, mapDispatchToFunction)(Gogumas);
