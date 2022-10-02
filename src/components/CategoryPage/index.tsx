import { useState } from "react";
import Router from "next/router";

import { useQuery } from "@tanstack/react-query";
import { getCategorios } from "../../api/category.api";
import useLocalstorage from "../../hooks/useLocalstorage";
import { BASIC_CONSTANT } from "../../utils/basic.constants";
import Presenter from "./Presenter";
import { PATH_CATEGORY } from "../../paths";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const token = useLocalstorage(BASIC_CONSTANT.CLIENT_TOKEN);
  const { isLoading } = useQuery(["api/category"], () => getCategorios(token), {
    enabled: !!token,
    onSuccess: (data) => {
      setCategories(data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const route = (id: number) => {
    Router.push(PATH_CATEGORY.detail(id).url);
  };

  return <Presenter categories={categories} route={route} />;
}
