import { css } from "@emotion/react";

export default css`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;

  div[role="modal-container"] {
    display: flex;
    flex-direction: column;

    div[role="modal-header"] {
      width: 100%;
    }

    div[role="modal-content"] {
    }
  }
`;
