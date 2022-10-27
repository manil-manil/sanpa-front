import { css } from "@emotion/react";

export default css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  border-radius: 10px;

  .description_text {
    text-align: center;
    white-space: pre;
    margin-top: 30px;
    font-size: 15px;
    color: #6e6e6e;
  }

  div {
    > div {
      /* width: 100%; */
    }
    > label {
      display: flex;
    }
  }

  div:not(:last-of-type) {
    margin-bottom: 25px;
  }

  .submit_label > input[type="file"] {
    /* 파일 필드 숨기기 */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  /* btns */
  .btns_container {
    margin-top: 30px;
    display: flex;
  }

  .btns_container > button {
    padding: 15px 0;
    font-family: "Pretendard-Regular";
    font-style: normal;
    font-weight: 800;
    font-size: 1em;
    line-height: 16px;
  }

  .btns_container > button:not(:nth-of-type(1)) {
    margin-left: 10px;
  }
`;
