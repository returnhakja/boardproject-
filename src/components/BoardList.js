import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Posts from "./Posts";
import styles from "./BoardList.module.css";
import Footer from "./Footer";

function BoardList() {
    const [posts, setPosts] = useState([]);
    const [getpage, setpage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const data = async () => {
            const response = await axios.get(
                `http://localhost:8080/board/boardlist?page=${currentPage}&size=${postsPerPage}`
            );
            setPosts(response.data.dtoList);
            setpage(response.data.pageList);
            console.log(response.data.pageList);
        };
        data();
    }, [currentPage]);

    return (
        <div>
            <div className={styles.div}>
                <h2>게시판</h2>

                <div>
                    <Link to="/insert">
                        <button className={styles.button}> 등록</button>
                    </Link>
                </div>
            </div>

            <div className={styles.list}>
                <Posts posts={posts} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={getpage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <Footer />
        </div>
    );
}

export default BoardList;
