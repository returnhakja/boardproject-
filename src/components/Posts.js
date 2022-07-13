import React from "react";
import { Link } from "react-router-dom";
import styles from "./BoardRead.module.css";

const Posts = ({ posts }) => {
    // const str = posts.user.usreEmail;

    return (
        <div>
            <table border="1">
                <thead className={styles.thead}>
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((post, index) => {
                        const str = post.user.userEmail;
                        const earr = str.split("@");

                        //console.log(earr[0]);
                        return (
                            <tr key={index}>
                                <td>{post.boardNo}</td>
                                <td>
                                    <Link to={`/${post.boardNo}`}>
                                        {post.boardTitle}
                                    </Link>
                                </td>

                                <td>{earr[0]}</td>
                                <td>{post.createdDate}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Posts;
