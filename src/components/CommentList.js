import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BoardRead.module.css";
import Comment from "./Comment";

function CommentList() {
    // console.log(data.commentNo);
    // console.log(setList);
    const [list, setList] = useState([]);

    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [list1, setList1] = useState([]);
    const { boardNo } = useParams();
    //이건 보더
    const headers = {
        "Content-Type": "application/json",
    };
    useEffect(() => {
        const data = async () => {
            const response = await axios
                .get(`http://localhost:8080/board/` + boardNo, headers)
                .then((response) => {
                    setList1(response.data);
                });
        };
        data();
    }, []);

    //이건 댓글
    useEffect(() => {
        const data = async () => {
            const response = await axios
                .get(`http://localhost:8080/comment/comments/` + boardNo)
                .then((response) => {
                    setList(response.data);
                    // console.log(response.data);
                });
        };
        data();
    }, []);

    //딜리트
    const deletehandle = async () => {
        const commentNo = document.getElementById("commenNo").value;
        console.log(commentNo);
        const response = await axios
            .delete("http://localhost:8080/commentd/" + commentNo)
            .then((response) => console.log(response.data));
        window.location.reload();
    };

    //업데이트

    const updatehandle = async (
        commenter,
        commentContent,
        commentNo,
        boardNo
    ) => {
        const inputdata = {
            commentNo: commentNo,
            commenter: commenter.value,
            commentContent: commentContent.value,
            board: {
                boardNo: boardNo,
            },
        };

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await axios
            .put("http://localhost:8080/commentup", inputdata, { headers })
            .then((response) => console.log(response.data));
        window.location.reload();
    };

    // console.log(list.length);
    return (
        <div>
            <div className={styles.span}>
                <button
                    onClick={() => {
                        setVisible1(!visible1);
                    }}
                >
                    댓글({list.length})
                </button>
            </div>
            <div className={styles.span}>
                <button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? "댓글작성" : "댓글작성"}
                </button>
            </div>
            <br />
            {visible && <Comment boardNo={list1.boardNo} />}
            {visible1 &&
                list.map((lists, index) => {
                    //console.log(lists.commenter); // list 데이터 있음
                    // console.log(lists.commentNo);
                    // console.log(lists.board.boardNo);
                    return (
                        <div className={styles.CommentList} key={index}>
                            <h3>
                                댓글 작성자 : &nbsp;
                                <input
                                    type="text"
                                    placeholder="작성자"
                                    id={"commenter" + lists.commentNo}
                                    className={styles.inputfont}
                                    defaultValue={lists.commenter}
                                />
                            </h3>

                            <input
                                type="hidden"
                                id="commenNo"
                                defaultValue={lists.commentNo}
                            />

                            <h3>
                                댓글 내용 : &nbsp;&nbsp;&nbsp;&nbsp;
                                <input
                                    type="text"
                                    placeholder="댓글 내용"
                                    id={"commentcontent" + lists.commentNo}
                                    className={styles.inputfont}
                                    defaultValue={lists.commentContent}
                                />
                            </h3>

                            <div className={styles.span}>
                                <button
                                    onClick={() =>
                                        updatehandle(
                                            document.getElementById(
                                                "commenter" + lists.commentNo
                                            ),
                                            document.getElementById(
                                                "commentcontent" +
                                                    lists.commentNo
                                            ),
                                            lists.commentNo,
                                            lists.board.boardNo
                                            // document.getElementById("commentNo"),
                                            // document.getElementById("boardNo")
                                        )
                                    }
                                >
                                    수정
                                </button>
                            </div>
                            <div className={styles.span}>
                                <button onClick={deletehandle}>삭제</button>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default CommentList;
