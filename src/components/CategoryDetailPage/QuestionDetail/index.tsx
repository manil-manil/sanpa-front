import { Box } from "@mui/material";

import FormContainer from "../../Form";

export default function QuestionDetail(params) {
  console.log(params);
  return (
    <Box>
      {params.data.map((item, index) => {
        return (
          <div key={index}>
            <h2>
              <span>{index + 1}.</span>
              <span>{item.title}</span>
            </h2>
            {/* <FormContainer /> */}
          </div>
        );
      })}
    </Box>
  );
}
