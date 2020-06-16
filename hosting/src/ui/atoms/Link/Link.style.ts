import { Link } from 'gatsby'
import styled from 'styled-components'

export const ButtonLink = styled('button')(P => ({
  display: `flex`,
  flexDirection: 'row',
  jusitfyContent: 'center',
  alignItems: 'center',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  padding: 0,
  ...P.style
}))

export const ExternalLink = styled('a')(P => ({
  display: `flex`,
  flexDirection: 'row',
  jusitfyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  ...P.style
}))

export const InternalLink = styled(Link)(P => ({
  display: `flex`,
  flexDirection: 'row',
  jusitfyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  ...P.style
}))
