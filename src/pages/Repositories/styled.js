import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 2rem auto;
`

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`
export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`
export const ListItem = styled.li`
    text-align: center;
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    border-radius: 10px;
`
export const LinkHome = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 2.5rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: white;
    text-decoration: none;
    font-family: sans-serif;
    border-radius: 10px;
`