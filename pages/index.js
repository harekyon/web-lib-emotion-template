import { css } from "@emotion/react";

export default function Main() {
  const style = css`
    background: #55ff23;
    @media (min-width: 420px) {
      background: hotpink;
    }
  `;
  return (
    <>
      <div css={style}>
        はれぽこにょん。インラインでメディアクエリ使えるにょん
      </div>
    </>
  );
}
