import React from 'react'
import styled from '@emotion/native'
import { ColorPalette, Typo } from '../../styles/variable'
import { backgroundWithColor, shadow } from '../../styles/backgrounds'

const LinkCardView = styled.View`
  ${backgroundWithColor('White')}
  width: 100%;
  height: 238px;
  box-shadow: ${shadow};
  border-radius: 4px;
`
const LinkImage = styled.Image`
  width: 100%;
  height: 120px;
`
const LinkDescView = styled.View`
  padding: 16px;
`
const LinkTitle = styled.Text`
  color: ${ColorPalette.BlueGray_3};
  font-family: ${Typo.Detail1_400};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.6px;
  margin-bottom: 4px;
  overflow: hidden;
`
const LinkDesc = styled.Text`
  font-family: ${Typo.Heading4_600};
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
  overflow: hidden;
  color: ${ColorPalette.BlueGray_4};
`

const TagBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 149px;
  height: 25px;
  overflow: hidden;
  margin-top: 16px;
`
const TagComponent = styled.View`
  padding: 2px 12px;
  margin-right: 10px;
  height: 25px;
  line-height: 25px;
  background-color: #5e7294;
  border-radius: 30px;
  color: #ffffff;
`
const TagText = styled.Text`
  color: white;
`

interface tag {
  tagName: string
  tagId: string
}
interface TagList extends Array<tag> {}

interface IOG {
  linkTitle: string
  linkDescription: string
  linkImage: string
}

export interface ILink {
  id: string
  remindId: null | string
  linkUrl: string
  openGraph: IOG
  memos: object[]
  tags: TagList
  registerDate: string
  modifiedDate: string
  bookmark: boolean
}

interface Props {
  link: ILink
}

interface TProps {
  text: string
}

const TagView = ({ text }: TProps) => {
  return (
    <TagComponent>
      <TagText numberOfLines={1}>{text}</TagText>
    </TagComponent>
  )
}

const LinkCard = ({ link }: Props) => {
  const { tags, openGraph } = link
  const { linkDescription, linkImage, linkTitle } = openGraph
  return (
    <LinkCardView>
      <LinkImage
        source={
          linkImage
            ? { uri: linkImage }
            : require('../../assets/images/cover.png')
        }
      />
      <LinkDescView>
        <LinkTitle numberOfLines={1}>{linkTitle}</LinkTitle>
        <LinkDesc>{linkDescription}</LinkDesc>
        <TagBar>
          {tags.map((tag, idx) => (
            <TagView text={tag.tagName} key={idx} />
          ))}
        </TagBar>
      </LinkDescView>
    </LinkCardView>
  )
}

export default LinkCard
