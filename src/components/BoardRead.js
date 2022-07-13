import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./BoardRead.module.css";
import CommentList from "./CommentList";

function BoardRead() {
    const [list, setList] = useState([]);

    const navi = useNavigate();
    const { boardNo } = useParams();

    const headers = {
        "Content-Type": "application/json",
    };

    useEffect(() => {
        const data = async () => {
            const response = await axios
                .get(`http://localhost:8080/board/` + boardNo, headers)
                .then((response) => {
                    setList(response.data);
                });
        };
        data();
    }, []);

    const updatehandle = () => {
        const boardTitle = document.getElementById("boardTitle").value;
        const boardContent = document.getElementById("boardContent").value;
        const user = document.getElementById("user").value;

        const inputdata = {
            boardNo: boardNo,
            boardTitle: boardTitle,
            boardContent: boardContent,
            user: { userEmail: user },
        };
        const headers = {
            "Content-Type": "application/json",
        };

        const data = async () => {
            const response = await axios.put(
                `http://localhost:8080/board/update`,
                inputdata,
                {
                    headers,
                }
            );
        };
        data();
    };

    const deletehandle = () => {
        const data = async () => {
            const response = await axios
                .delete(`http://localhost:8080/board/${boardNo}`)
                .then(() => {
                    navi("/");
                });
        };
        data();
    };

    return (
        <div className={styles.Readdiv}>
            <div className={styles.Readheader}>
                <h2>게시판 보기</h2>
            </div>
            <div className={styles.Readinput}>
                <h3>제목</h3>

                <input
                    placeholder="제목"
                    defaultValue={list.boardTitle}
                    id="boardTitle"
                />
                <br />
                <h3>내용</h3>
                <textarea
                    cols="50"
                    rows="5"
                    placeholder="내용"
                    defaultValue={list.boardContent}
                    id="boardContent"
                />
                <h3>작성자</h3>
                <input
                    placeholder="작성자"
                    defaultValue={list.user ? list.user.userEmail : null}
                    id="user"
                />
                <br />
                <h3>등록일</h3>
                <input placeholder="등록일" defaultValue={list.createdDate} />
                <br />
                <h3>수정일</h3>
                <input placeholder="수정일" defaultValue={list.modifiedDate} />
                <br />
            </div>
            <div className={styles.span}>
                <Link to="/">
                    <button>리스트로</button>
                </Link>
            </div>
            <div className={styles.span}>
                <button onClick={updatehandle}>수정하기</button>
            </div>
            <div className={styles.span}>
                <button onClick={deletehandle}>삭제하기</button>
            </div>
            <br />

            <CommentList />
        </div>
    );
}

export default BoardRead;
