import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      /* border-right: 1px solid #eee; */
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  /* border-left: 1px solid #eee; */

  div {
    text-align: right;
    margin-right: 25px;
    height: 42px;
    align-content: center;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    border: 0;
    color: #fff;
    background: #d44059;
    width: 71px;
    height: 42px;
    border-radius: 4px;
    /* margin-left: 25px; */
  }
`;
