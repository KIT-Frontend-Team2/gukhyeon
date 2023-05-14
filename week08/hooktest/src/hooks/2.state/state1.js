import PlayListMock from "../../__mock__/playList.json";
import { useState } from "react";

function State1() {
  const [playList, setPlayList] = useState([]);
  const [newSongTitle, setNewSongTitle] = useState("");
  const [newSongSinger, setNewSongSinger] = useState("");

  const handleAddList = () => {
    // const ad = [...PlayListMock.playlist];
    const song = playList.find((song) => song.title === newSongTitle);
    if (song) {
      alert("이미 존재하는 노래입니다.");
      return;
    }

    // const playListConfirm = ad.find(
    // //   (song) => song.title === newSongTitle && song.signer === newSongSinger
    // // );
    // // if (!playListConfirm) {
    // //   alert("playlist 에 존재하지 않습니다.");
    // //   return;
    // // }

    const newSong = {
      title: newSongTitle,
      signer: newSongSinger,
    };
    setPlayList([...playList, newSong]);
    setNewSongTitle("");
    setNewSongSinger("");
  };

  const handleDeleteList = (title) => {
    const _playList = playList.filter((song) => song.title !== title);
    setPlayList(_playList);
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((song) => (
          <li key={song.title}>
            <h3>{song.title}</h3>
            <p>{song.signer}</p>
            <button onClick={() => handleDeleteList(song.title)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 :{" "}
          <input
            value={newSongTitle}
            onChange={(e) => setNewSongTitle(e.target.value)}
          />
        </p>
        <p>
          가수/작곡 :{" "}
          <input
            value={newSongSinger}
            onChange={(e) => setNewSongSinger(e.target.value)}
          />
        </p>
        <p>
          <button onClick={handleAddList}>추가</button>
        </p>
      </div>
    </>
  );
}

export default State1;

/* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버튼을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요

    1. playList 상태 받아오기 
    2. 추가 버튼을 눌렀을 때 받아온 데이터 + 삭제버튼 추가하기
    3. 삭제 버튼을 눌렀을 때 해당 데이터 삭제
  */

console.log(PlayListMock.playlist);
/* 데이터 콘솔에 찍어두었으니 확인해볼 것

import PlayListMock from "../../__mock__/playList.json";
import { useState } from "react";

function State1() {
  return (
    <>
      <h1>문제1</h1>
      <ul>

        <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
        </li>
      </ul>
      <div>
        <p>
          곡명 : <input />
        </p>
        <p>
          가수/작곡 : <input />
        </p>
        <p>
          <button>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
*/

/**
 * 진행방향
 * playlist를 담을 상태를 빈배열로 받아옴
 * title 과 singer 를 받아오기 위해 useState 사용
 * handleAddList 함수를 만들어 추가 버튼 클릭시 input 창에 입력한
 *    title 과 singer를 추가하고, find 를 사용해 기존에 플레이리스트에
 *    담겨져 있는 곡과 추가할 곡을 비교해 있다면 alert 로 알림
 * handleDelete 함수를 만들어 filter로 title 을 찾아 삭제버튼에 onClick 이벤트로 추가
 * playList 에 map 을 돌려서 title, singer, 삭제 버튼을 만들어줌
 *
 * 문제점
 * 처음 playList 를 useState 로 만들때
 * mock 데이터 내에 없는 곡들은 거르기 위해 useState 값 안에 스프레드 연산자를
 * 넣었으나 화면이 처음 랜더링 될 때부터 리스트에 mock 데이터 목록들이 나옴
 * 그래서 빈 배열로 상태를 받아왔지만
 * mock 데이터 내에 없는 곡들을 비교하여 추가하지 못하도록 하는 기능을 구현하지 못함
 *
 *
 *
 */
