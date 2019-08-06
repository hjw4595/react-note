# react-note
react local storage
apollo 
query

err) 
화면 출력 안됨
Element.createShadowRoot is deprecated and will be removed in M73, around March 2019. Please use Element.attachShadow instead.
경고 때문에 안뜬다고 생각  -> 구글 확장프로그램에서 충돌난 경우였음 
해결 - https://stackoverflow.com/questions/53653685/element-createshadowroot-is-deprecated-and-will-be-removed-in-m73-around-march

injectGlobal 에러 
import { injectGlobal } from 'styled-components';

injectGlobal`

-> 

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
