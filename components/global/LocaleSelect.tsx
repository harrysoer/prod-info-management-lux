import { Button } from "@chakra-ui/button"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { Portal } from "@chakra-ui/portal"
import { Globe } from "react-feather"

import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router"

import i18nConfigs from "next-i18next.config"

type Props = {
  menuListProps?: Record<string, any>
}

const LocaleSelect = ({ menuListProps }: Props) => {
  const router = useRouter()
  const { t: tLocales, i18n } = useTranslation('locales')
  const languages = i18nConfigs.i18n.locales

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

      <Portal>
        <MenuList {...(menuListProps || {})}>
          {
            languages.map(language => (
              <MenuItem
                key={language}
                onClick={() => onChangeLanguage(language)}
              >
                {tLocales(language)}
              </MenuItem>
            ))
          }
        </MenuList>
      </Portal>
    </Menu>
  )
}

export default LocaleSelect
