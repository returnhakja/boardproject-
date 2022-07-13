import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InsertBoard.module.css";

function InsertBoard() {
    const navi = useNavigate();

    const insertHandle = () => {
        const boardTitle = document.getElementById("boardTitle").value;
        const boardContent = document.getElementById("boardContent").value;
        const user = document.getElementById("user").value;

        const inputdata = {
            boardNo: 0,
            boardTitle: boardTitle,
            boardContent: boardContent,
            user: { userEmail: user },
        };
        const headers = {
            "Content-Type": "application/json",
        };

        const data = async () => {
            const response = await axios
                .post(`http://localhost:8080/board/insert`, inputdata, {
                    headers,
                })
                .then(() => {
                    navi("/");
                });
        };
        data();
    };

    return (
        <div className={styles.divclass}>
            <h2>게시판 등록</h2>

            <form>
                <h3>제목</h3>
                <input type="text" id="boardTitle" placeholder="제목" />
                <br />
                <h3>내용</h3>
                <textarea placeholder="내용" id="boardContent" />
                <h3>작성자</h3>
                <input type="text" id="user" placeholder="작성자" />
                <br />
                <span className={styles.span}>
                    <button type="button" onClick={insertHandle}>
                        등록
                    </button>
                </span>
            </form>
        </div>
    );
}

export default InsertBoard;
