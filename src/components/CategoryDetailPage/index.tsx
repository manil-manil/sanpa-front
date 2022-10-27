import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { getCategory } from "../../api/category.api";
import { getNodeQuestion } from "../../api/question.api";
import useLocalstorage from "../../hooks/useLocalstorage";
import { modalAtom } from "../../recoil/modal";
import { BASIC_CONSTANT } from "../../utils/basic.constants";
import { FORM_ITEM_TYPE } from "../../utils/form.constants";
import Presenter from "./Presenter";
import QuestionDetail from "./QuestionDetail";
import { INode } from "./TreeComponent";

const convertData = (data: any[]) => {
  const response: any[] = [];

  data.forEach((item) => {
    const newData = {
      title: item.title,
      type: FORM_ITEM_TYPE.RADIO,
      name: item.id,
    };

    response.push(newData);
  });

  return response;
};

interface SelectedNode extends INode {
  id: number;
}

export default function CategoryDetailPage() {
  const [nodes, setNodes] = useState({});
  const [answers, setAnsers] = useState([]);
  const [selectedNode, setSelectedNode] = useState<SelectedNode>();
  const setDialogState = useSetRecoilState(modalAtom);

  const token = useLocalstorage(BASIC_CONSTANT.CLIENT_TOKEN);
  const router = useRouter();
  const { id } = router.query;
  const enabled = !!token && !!id;
  const enabledQuestion = enabled && !!selectedNode?.id;

  useQuery([`api/categories/${id}`], () => getCategory(token, Number(id)), {
    enabled,
    onSuccess: (data) => {
      setNodes(data.nodes);
    },
  });

  useQuery(
    [`api/questions/node/${selectedNode?.id}`],
    () => getNodeQuestion(token, selectedNode?.id),
    {
      enabled: enabledQuestion,
      onSuccess: (data) => {
        const result = convertData(data);
        setDialogState({
          isOpen: true,
          title: "문제들",
          confirmText: null,
          content: <QuestionDetail data={result} />,
        });
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return (
    <Presenter
      nodes={nodes}
      setSelectedNode={() => setSelectedNode({ id: 1 })}
    />
  );
}
