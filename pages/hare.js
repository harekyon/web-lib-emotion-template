import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { css } from "@emotion/react";

export default function Home() {
  const style = css`
    background: #55ff23;
    @media (min-width: 420px) {
      background: hotpink;
    }
  `;
  return (
    <>
      <div css={style}>ダダダだ</div>
    </>
  );
}
