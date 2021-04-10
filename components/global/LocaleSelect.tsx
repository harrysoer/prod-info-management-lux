import { Button } from "@chakra-ui/button"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { Globe } from "react-feather"

import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router"

const LocaleSelect = () => {
  const router = useRouter()
  const { t: tLocales, i18n } = useTranslation('locales')

  const onChangeLanguage = (language: string) => {
    const currentPath = router.asPath
    router.push(currentPath, currentPath, { locale: language })
  }

  return (
    <Menu placement="bottom">
      <MenuButton
        as={Button}
        leftIcon={<Globe size={16} />}
        size="sm"
        variant="ghost"
      >
        {i18n.language}
      </MenuButton>

      <MenuList>
        {
          i18n.languages.map(language => (
            <MenuItem
              key={language}
              onClick={() => onChangeLanguage(language)}
            >
              {tLocales(language)}
            </MenuItem>
          ))
        }
      </MenuList>
    </Menu>
  )
}

export default LocaleSelect
