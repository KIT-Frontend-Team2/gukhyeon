import { useState } from "react";
import styled from "styled-components";

function Comment({ nickname, content, onDelete, handleUpdateComment }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const handleSetIsEditMode = () => {
    if (!isEditMode) return setIsEditMode(true);
    handleUpdateComment(nickname, content);
    setIsEditMode(false);
  };

  const onChange = (e) => {
    setEditContent(e.target.value);
  };

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{nickname}</span>
      </p>

      <span>
        {isEditMode ? (
          <textarea value={editContent} onChange={onChange}></textarea>
        ) : (
          <p>
            댓글 내용: <span>{editContent}</span>{" "}
          </p>
        )}
      </span>

      <button onClick={handleSetIsEditMode}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
