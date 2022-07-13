import React from "react";
import styled from "styled-components";

const PaginationUL = styled.a`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 5px;
`;
const PagignationLi = styled.b`
    background: linear-gradient(
        90deg,
        rgba(129, 230, 217, 1) 0%,
        rgba(79, 209, 197, 1) 100%
    );
    border-radius: 1000px;
    color: darkslategray;
    cursor: pointer;
    box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
    font-weight: 700;
    transition: 0.3s;
    padding: 5px;
    font-size: 32px;
    $:hover {
        currsor: pointer;
        transform: scale(1.2);
    }
`;

const Pagination = ({ totalPosts, setCurrentPage }) => {
    return (
        <div>
            <div>
                <PaginationUL>
                    {totalPosts.map((number) => (
                        <PagignationLi key={number}>
                            <span onClick={() => setCurrentPage(number)}>
                                {number}
                            </span>
                        </PagignationLi>
                    ))}
                </PaginationUL>
            </div>
        </div>
    );
};

export default Pagination;
