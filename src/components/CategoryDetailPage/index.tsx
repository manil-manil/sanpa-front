import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { getCategory } from "../../api/category.api";
import { getNodeQuestion } from "../../api/question.api";
import useLocalstorage from "../../hooks/useLocalstorage";
import { modalAtom } from "../../recoil/modal";
import { BASIC_CONSTANT } from "../../utils/basic.constants";
import Presenter from "./Presenter";
import QuestionDetail from "./QuestionDetail";
import { INode } from "./TreeComponent";

const orgChart = {
  name: "그림",
  animated: true,
  attributes: {
    percent: 8.43,
  },
  children: [
    {
      name: "시점",
      attributes: {
        percent: 25.0,
      },
      children: [
        {
          name: "투시",
          attributes: {
            percent: 58.0,
          },
          children: [
            {
              name: "1점 투시",
              attributes: {
                percent: 76.3,
              },
            },
            {
              name: "2점 투시",
              attributes: {
                percent: 33,
              },
            },
          ],
        },
        {
          name: "빛",
          attributes: {
            percent: 18.7,
          },
          children: [
            {
              name: "그림자",
              attributes: {
                percent: 17.7,
              },
            },
          ],
        },
      ],
    },
  ],
};

interface SelectedNode extends INode {
  id: number;
}

export default function CategoryDetailPage() {
  const [nodes, setNodes] = useState(orgChart);
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
        setDialogState({
          isOpen: true,
          title: "문제들",
          confirmText: "제출",
          cancelText: "취소",
          content: <QuestionDetail data={data} />,
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
