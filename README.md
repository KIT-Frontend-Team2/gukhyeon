# 5월 15일

## 오늘 할 것

1. 강사님 플로우 state 2 번 문제 댓글이 추가 됐을 때 수정, 삭제 버튼 생성 후 이벤트 적용
2. state 2번 문제가 무난히 끝나면 state 3번
3. 프로그래머스 알고리즘 문제 풀이 day16 풀기
4. 벨로퍼트와 함께하는 모던 리액트 3장 투두리스트 만들기

# 5월 14일

## 공부한 것

- 강사님 플로우 week08 state 문제 q1, q2
- 알고리즘 문제 programmers day16 가장 큰 수 찾기

## 문제를 풀면서 겪은 문제점

1. state 1번에서
   처음 playList 를 useState 로 만들고
   mock 데이터와 비교했을 때 없는 값들은 거르기 위해 useState 값 안에 스프레드 연산자를 넣었으나 화면이 처음 랜더링 될 때부터 리스트에 mock 데이터 목록들이 나옴

   ```jsx
   <!-- 예시 -->
   const [playList, setPlayList] = useState(...PlayListMock.playlist);
   ```

   <img src='./week08/hooktest/img/ErrorCapture1.png' />

   (위 상황은 어느정도 정리가 된 상태에서 당시 에러를 구현하려 했으나 로직 찾기가 힘들어 비슷한 상황으로 대처 원래는 삭제버튼 위에 mock 데이터 안에 있는 title과 singer 도 같이 보였음)

   그래서 빈 배열로 상태를 받아왔지만
   mock 데이터 내에 없는 곡들을 비교하여 추가하지 못하도록 하는 기능을 구현하지 못함

   - 이로인해 생긴 문제점 mock 데이터에 없는 값들이 추가가 된다.

2. state 1번 문제에 중복 방지
   문제점이라기 보단 개인적으로 추가한 기능
   find 를 사용해서 이미 플레이리스트에 올라간 값이라면 alert 로 알림

   ```jsx
   <!-- 예시  -->
   const song = playList.find((song) => song.title === newSongTitle);
   if (song) {
     alert("이미 존재하는 노래입니다.");
     return;
   }
   ```

    <img src='./week08/hooktest/img/testCapture1.png' />

이와 비슷하게 mock 데이터 내에 없는 값들은 화면에 보이는 플레이리스트에 추가하지 못하게 하려 했으나 mock 데이터 내에 있는 값도 추가가 안됨

시도하려 했던 코드

```jsx
const ad = [...PlayListMock.playlist];
const playListConfirm = ad.find(
  (song) => song.title === newSongTitle && song.signer === newSongSinger
);
if (!playListConfirm) {
  alert("playlist 에 존재하지 않습니다.");
  return;
}
```

3. state 2번 문제에 Q1번 댓글 목록 랜더링은 성공,
   후에 작성자, 댓글 입력하여 추가까지 했으나
   수정, 삭제에서 막혔다.

   구상을 하면 할 수록 어렵게 꼬여져서 일단 문제 보류중
   myComment 는 일단 미뤄두고 댓글 추가가 됐을 때 수정 버튼과
   삭제 버튼이 나와야 하는데, state 1번에 추가가 되면서 삭제 버튼이 생긴다.
   이 점을 참고하여 다시 구상을 해봐야겠다.
