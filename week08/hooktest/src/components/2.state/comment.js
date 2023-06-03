import { useState } from "react";
import styled from "styled-components";

function Comment({ user, content, setPost, post }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const onChangeContent = (e) => {
    setEditedContent(e.target.value);
  };
  const handleUpdate = (content) => {
    setPost((prev) => ({
      ...prev,
      Comment: prev.Comments.map((comment) => {
        if (comment.content === content) {
          return {
            ...comment,
            content: editedContent,
          };
        }
        return comment;
      }),
    }));
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();

    toggleEditMode();
  };

  // 업데이트 할 항목 찾아 접근 후 값을 수정

  return (
    <S.CommentItem>
      {isEditMode ? (
        <form onSubmit={onSubmitEdit}>
          <input type="text" value={editedContent} onChange={onChangeContent} />
          <button type="submit" onClick={handleUpdate}>
            저장
          </button>
          <button type="button" onClick={toggleEditMode}>
            취소
          </button>
        </form>
      ) : (
        <div>
          <button type="button" onClick={toggleEditMode}>
            수정
          </button>
        </div>
      )}
      <p>
        작성자: <span>{user.nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{content}</span>
      </p>
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
