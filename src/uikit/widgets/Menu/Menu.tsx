import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import throttle from 'lodash/throttle'
import Overlay from '../../components/Overlay/Overlay'
import Flex from '../../components/Box/Flex'
import { useMatchBreakpoints } from '../../hooks'
import Logo from './components/Logo'
import NavMenu from './components/NavMenu'
import LuckyIcon from './components/LuckyIcon'
import BSCIcon from './components/BSCIcon'
import LangSelector from './components/LangSelector'
import Panel from './components/Panel'
import UserBlock from './components/UserBlock'
import { NavProps } from './types'
import Avatar from './components/Avatar'
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from './config'
//
const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  background: #252635;
  z-index: 20;
  transform: translate3d(0, 0, 0);
  background: linear-gradient(45deg, rgb(35 35 35) 30%, rgb(35 35 35) 100%);
  @media (max-width: 768px) {
    top: 0;
    background: linear-gradient(45deg, rgb(35 35 35) 30%, rgb(35 35 35) 100%);
    z-index: 1050;
  }
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
  balanceBNB,
  balanceLUCKY,
  onChainChange,
  chainId,
}) => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = isXl === false
  const [isPushed, setIsPushed] = useState(!isMobile)
  const [showMenu, setShowMenu] = useState(true)
  const refPrevOffset = useRef(window.pageYOffset)

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight
      const isTopOfPage = currentOffset === 0
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true)
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true)
        } else {
          // Has scroll down
          setShowMenu(false)
        }
      }
      refPrevOffset.current = currentOffset
    }
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === 'Home')

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <FlexBox>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? '/'}
          />
          <NavMenu />
          <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        </FlexBox>
        <Flex>
          {chainId && <BSCIcon chainId={chainId} onChainChange={onChainChange} />}
          <LuckyIcon balance={balanceLUCKY || ''} />
          <UserBlock chainId={chainId} balanceBNB={balanceBNB} account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper className="list-menu ">
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  )
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

export default Menu
