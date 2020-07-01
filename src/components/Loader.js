import React from 'react'
import ContentLoader, { Instagram } from 'react-content-loader'
import styled from 'styled-components'

const LoaderContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export const CommentLoader = () => (
  <ContentLoader
    speed={2}
    viewBox='0 0 900 160'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='48' y='8' rx='3' ry='3' width='100' height='6' />
    <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
    <circle cx='20' cy='20' r='20' />
    <circle cx='20' cy='70' r='20' />
    <rect x='48' y='60' rx='3' ry='3' width='100' height='6' />
    <rect x='48' y='77' rx='3' ry='3' width='52' height='6' />
    <circle cx='20' cy='120' r='20' />
    <rect x='48' y='110' rx='3' ry='3' width='100' height='6' />
    <rect x='48' y='125' rx='3' ry='3' width='52' height='6' />
  </ContentLoader>
)

export const HomepageLoader = () => (
  <>
    <Instagram />
    <Instagram />
  </>
)

export const LikeLoader = () => (
  <ContentLoader
    speed={1}
    width={580}
    height={27}
    viewBox='0 0 580 27'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='12' cy='12' r='12' />
    <circle cx='37' cy='12' r='12' />
    <circle cx='62' cy='12' r='12' />
    <circle cx='87' cy='12' r='12' />
  </ContentLoader>
)

export const Loader = () => (
  <ContentLoader
    speed={2}
    viewBox='0 0 620 325'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0' ry='0' width='620' height='325' />
  </ContentLoader>
)

export const ProfilepageLoader = () => (
  <LoaderContainer>
    <ContentLoader
      speed={1}
      viewBox='0 0 900 1200'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='460' cy='120' r='110' />
      <rect x='390' y='238' rx='0' ry='0' width='134' height='26' />
      <rect x='0' y='390' rx='0' ry='0' width='290' height='290' />
      <rect x='303' y='390' rx='0' ry='0' width='290' height='290' />
      <rect x='606' y='390' rx='0' ry='0' width='290' height='290' />
      <rect x='0' y='690' rx='0' ry='0' width='290' height='290' />
      <rect x='303' y='690' rx='0' ry='0' width='290' height='290' />
      <rect x='606' y='688' rx='0' ry='0' width='290' height='290' />
    </ContentLoader>
  </LoaderContainer>
)
