import { Box, Input } from "@chakra-ui/react"
import { AxiosRequestConfig } from "axios";
import { RefetchOptions } from "axios-hooks";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Search } from 'react-feather';
import { useTranslation } from "react-i18next";

type ManageFiltersProps = {
  setCategory: Dispatch<SetStateAction<string>>
  setDescription: Dispatch<SetStateAction<string>>
  setBrand: Dispatch<SetStateAction<string>>
}

const ManageFilters: React.FC<ManageFiltersProps> = ({
  setCategory,
  setDescription,
  setBrand,
}) => {

  const { t: tCommon } = useTranslation('common')

  const onFilterChange = ({ target }) => {
    switch (target.name) {
      case "category":
        setCategory(target.value)
        break;

      case "description":
        setDescription(target.value)
        break;

      case "brand":
        setBrand(target.value)
        break;

      default:
        break;
    }
  }

  return (
    <Box
      flex={1}
      display="flex"
      alignItems="center"
      marginRight="30px"
    >
      <Box>
        <Search size="20px" />
      </Box>

      <Input
        name="description"
        onChange={onFilterChange}
        placeholder={(tCommon('description'))}
        marginLeft="22px"
        width="20%"
      />
      <Input
        name="category"
        onChange={onFilterChange}
        placeholder={(tCommon('category'))}
        marginLeft="22px"
        width="20%"
      />
      <Input
        name="brand"
        onChange={onFilterChange}
        placeholder={(tCommon('brand'))}
        marginLeft="22px"
        width="20%"
      />

    </Box>
  )
}

export default ManageFilters
