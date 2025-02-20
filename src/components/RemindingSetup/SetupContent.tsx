import React from 'react'
import styled from '@emotion/native'
import { backgroundWithColor } from '../../styles/backgrounds'
import { ColorPalette, Typo } from '../../styles/variable'
import { fontWithColor } from '../../styles/fonts'
import SVG from '../../assets/images/svg'
import { flexWithAlign } from '../../styles/flexbox'
import Empty from '../Common/Empty'
import RemindItem from './RemindItem'
import { useNavigation } from '@react-navigation/native'
import { RouterNavigationProps } from '../../pages/Router'
import { IArticleSelected } from '../RemindingGather/GatherArticleList'

const SetupContentView = styled.View`
  ${backgroundWithColor('White')}
  flex: 1;
  padding: 24px 18px;
`

const SetupTitleView = styled.View`
  ${flexWithAlign('center', 'space-between', 'row')}
`

const SetupTitle = styled.Text`
  ${fontWithColor('BlueGray_3')}
  ${Typo.Heading3_600}
`

const SetupPlusTouchable = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`

const RemindList = styled.View`
  padding: 24px 6px;
  flex: 1;
`

const addButtonInsets = { top: 8, bottom: 8, left: 8, right: 8 }

interface Props {
  articles: IArticleSelected[]
}

const SetupContent = ({ articles }: Props) => {
  const navigation = useNavigation<RouterNavigationProps>()

  const onAddPress = () => {
    navigation.navigate('RemindingGather')
  }

  return (
    <SetupContentView>
      <SetupTitleView>
        <SetupTitle>
          {articles.length > 0
            ? `이 시간에 설정한\n링크가 ${articles.length}개 있어요!`
            : '이 시간에 설정한\n링크가 아직 없어요!'}
        </SetupTitle>
        <SetupPlusTouchable hitSlop={addButtonInsets} onPress={onAddPress}>
          <SVG.AddLight stroke={ColorPalette.LinkkleBlueGray} width="24" />
        </SetupPlusTouchable>
      </SetupTitleView>

      <RemindList>
        {articles.length === 0 && (
          <Empty
            text={'링크가 설정되지 않았어요!\n리마인딩 받을 링크를 모아보세요.'}
            background={'White'}
            button
            buttonText="링크 모으기"
            onButtonPress={onAddPress}
          />
        )}
        {articles.map(article => (
          <RemindItem
            key={article.articleId}
            folderName={article.folderName}
            articleName={article.articleName}
            source={
              article.articleImage
                ? {
                    uri: article.articleImage
                  }
                : require('../../assets/images/cover_small.png')
            }
          />
        ))}
      </RemindList>
    </SetupContentView>
  )
}

export default SetupContent
