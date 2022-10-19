import { Box } from "@mui/material";
import RadioGroupComponent from "../../Common/RadioGroup";

export default function QuestionDetail(params) {
  return (
    <Box>
      {params.data.map((item, index) => {
        return (
          <div key={index}>
            <h2>
              <span>{index + 1}.</span>
              <span>{item.title}</span>
            </h2>
            <RadioGroupComponent data={item.choices} />
          </div>
        );
      })}
    </Box>
  );
}
