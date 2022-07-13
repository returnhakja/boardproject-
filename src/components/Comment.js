import axios from "axios";
import React, { useState } from "react";
import styles from "./BoardRead.module.css";

function Comment(boardNo) {
    console.log(boardNo);
    const [data, setdata] = useState();
    const commenthandle = () => {
        const commenter = document.getElementById("commenter").value;
        const commentcontent = document.getElementById("commentcontent").value;
        // console.log(this.props);

        const inputdata = {
            commenter: commenter,
            commentContent: commentcontent,
            board: {
                boardNo: boardNo.boardNo,
                // user: {
                //     userEmail: null,
                // },
            },
        };
        // data();

        const headers = {
            "Content-Type": "application/json",
        };

        const data = async () => {
            console.log(inputdata);
            const response = await axios
                .post(`http://localhost:8080/commentin`, inputdata, {
                    headers,
                })
                .then((response) => {
                    setdata(response.config.data);
                });
            window.location.reload();
        };
        data();
    };

    return (
        <div className={styles.divcomment}>
            <h3>
                댓글 작성자 : &nbsp;
                <input
                    type="text"
                    placeholder="작성자"
                    id="commenter"
                    className={styles.inputfont}
                />
            </h3>
            <h3>
                댓글 내용 : &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    placeholder="댓글 내용"
                    id="commentcontent"
                    className={styles.inputfont}
                />
            </h3>
            <div className={styles.span}>
                <button onClick={commenthandle}>작성</button>
            </div>
            <div className={styles.span}>
                <button>수정</button>
            </div>
            <div className={styles.span}>
                <button>삭제</button>
            </div>
        </div>
    );
}

export default Comment;
