import React, { useState, useEffect } from "react";
import Q3components from "../../components/1.basic/q3components";

function Q3() {
  const [count, setCount] = useState(0); // 줄넘기 횟수 state
  const [showComponent, setShowComponent] = useState(false); // Q3components 보이기/숨기기 state

  useEffect(() => {
    let intervalId; // intervalId를 저장할 변수

    if (showComponent) {
      // Q3components가 보이는 상태일 때 interval 함수 실행
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 2000);
    }

    return () => {
      clearInterval(intervalId); // 컴포넌트가 unmount될 때 interval 함수 clear
    };
  }, [showComponent]);

  const handleStartClick = () => {
    setShowComponent(true); // Q3components 보이기
    setCount(0); // 줄넘기 횟수 초기화
  };

  const handleStopClick = () => {
    setShowComponent(false); // Q3components 숨기기
    setCount(0); // 줄넘기 횟수 초기화
  };

  return (
    <>
      <h1>문제3</h1>
      <div>
        <p> 줄넘기 횟수 : {count} </p>
        {showComponent && <Q3components />}
        <p>
          <button onClick={handleStartClick}>줄넘기 시작</button>
        </p>
        <p>
          <button onClick={handleStopClick}>줄넘기 중지</button>
        </p>
      </div>
    </>
  );
}

export default Q3;

/* 
    문제3
    useEffect useState에 관련한 문제입니다
    단체 줄넘기 대회에 출전하였습니다

    줄넘기 시작 버튼을 누르면 
    Q3components 컴포넌트가 보입니다.

    Q3components 내부에는

    해당 컴포넌트가 보이기 시작한 시점부터
    2초마다 줄넘기 횟수가 1회 씩 증가하는 비즈니스 로직이 존재합니다

    또한, 이러한 줄넘기 횟수 증가는 q3.js(index)에서도 확인할 수 있도록
    <p> 줄넘기 횟수 : 0 </p> 에 횟수로 표시됩니다

    줄넘기 중지 버튼을 누르면
    해당 컴포넌트는 보이지 않아야하며, 줄넘기 횟수도 더이상 증가해서는 안됩니다.
    또한, 줄넘기 횟수는 0으로 고정되어야합니다.
  */
