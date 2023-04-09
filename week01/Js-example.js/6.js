/*
play list 재생하기

당신은 play list 안에 있는 노래를 들으려고 합니다.
play list 안에는 내가 좋아하는 가수 5명이상이 각자 1개의 곡을 가지고 있습니다.

예시

{
  볼빨간사춘기: 나만봄,
  엠씨더맥스: 어디에도,
  방탄소년단: butter,
  anna-marie: 2002,
  임창정: 소주한잔
}

playlist에 가수의 노래가 있을 경우
  임창정의 소주한잔을 재생합니다.

playlist에 가수의 노래가 없을 경우
  재생목록에 존재하지 않습니다.

(가수명이 영어일 경우 한글로 검색을 했을 때도 나오게끔 만드세요
  에시
  anna-marie => 안나마리
)

*/
const playList = {
  볼빨간사춘기: "나만봄",
  엠씨더맥스: "어디에도",
  방탄소년단: "butter",
  "anna-marie": "2002",
  임창정: "소주한잔",
};

function playSong(singer) {
  const koreanSinger = {
    BOL4: "볼빨간사춘기",
    "MC THE MAX": "엠씨더맥스",
    BTS: "방탄소년단",
    "anna-marie": "안나마리",
    "Im chang-jung": "임창정",
  };

  const convertSinger = koreanSinger[singer] || singer;

  convertSinger in playList
    ? console.log(
        `${singer}의 노래 ${playList[convertSinger]}을/를 재생합니다.`
      )
    : console.log("재생목록에 존재하지 않습니다.");
}
playSong("BTS");

/*
// 실행 예시
playSong('방탄소년단'); // 방탄소년단의 노래 butter을/를 재생합니다.
playSong('엠씨더맥스'); // 엠씨더맥스의 노래 어디에도을/를 재생합니다.
playSong('안나마리'); // 안나마리의 노래 2002을/를 재생합니다.
playSong('임창정'); // 임창정의 노래 소주한잔을/를 재생합니다.
playSong('BTS'); // BTS의 노래 butter을/를 재생합니다.
playSong('아이유'); // 재생목록에 존재하지 않습니다.
*/
