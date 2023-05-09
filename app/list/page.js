'use client'

import {useState} from "react";

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량, 수량변경] = useState([0, 0, 0])
    let [수량2, 수량변경2] = useState([0, 0, 0])
    return (
        <div>
            <h4 className="title">상품목록</h4>

            <span>{수량[0]}</span>
            <button onClick={() => {
                // state 변경함수 사용시 새 state = 기존 state 일 경우 변경X
                // 독립적인 array 만들어서 복사
                let copy = [...수량]
                copy[0]++
                수량변경(copy)
            }}>+
            </button>

            <span>{수량[1]}</span>
            <button>+</button>

            <span>{수량[2]}</span>
            <button>+</button>

            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"/>
                            <h4>{a} $40</h4>
                            <span> {수량2[i]} </span>
                            <button onClick={() => {
                                let copy2 = [...수량2]
                                copy2[i]++
                                수량변경2(copy2)
                            }}>+
                            </button>
                            <button onClick={() => {
                                let copy2 = [...수량2]
                                copy2[i]--
                                수량변경2(copy2)
                            }}>-
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
}
