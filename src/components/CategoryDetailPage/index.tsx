import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCategory } from "../../api/category.api";
import useLocalstorage from "../../hooks/useLocalstorage";
import { BASIC_CONSTANT } from "../../utils/basic.constants";
import Presenter from "./Presenter";

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

export default function CategoryDetailPage() {
  const [nodes, setNodes] = useState(orgChart);
  const token = useLocalstorage(BASIC_CONSTANT.CLIENT_TOKEN);
  const router = useRouter();
  const { id } = router.query;
  const enabled = !!token && !!id;

  useQuery([`api/categories/${id}`], () => getCategory(token, Number(id)), {
    enabled,
    onSuccess: (data) => {
      setNodes(data.nodes);
    },
  });

  return <Presenter nodes={nodes} />;
}
