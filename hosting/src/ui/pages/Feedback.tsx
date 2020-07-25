import React, { useState } from 'react'
import Stars from 'react-star-ratings'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import lastWorkDay from 'ui/helpers/lastWorkDay'
import PageLayout from 'ui/layouts/PageLayout'

const Feedback = () => {
  const { firstName, lastName } = useSelector(s => s.user)
  const [rating, setRating] = useState(4)

  const postRating = () => {
    console.log(rating)
  }

  console.log()
  return (
    <PageLayout page="home" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <img
        src="/images/hippo.png"
        alt="hippo"
        height="300px"
        style={{ animation: 'flipInX', animationDuration: '1s' }}
      />
      <Text
        size="XL"
        text={`HELLO ${firstName.toUpperCase()} ${lastName.toUpperCase()},`}
        style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'helvetica', fontWeight: 100 }}
        bold
        unique
      />
      <Text
        size="XL"
        text={`HOW WAS YOUR DAY ${lastWorkDay().toUpperCase()}?`}
        style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'helvetica', fontWeight: 100 }}
        bold
        unique
      />
      <Stars
        rating={rating || 4}
        starRatedColor="#F8E001"
        starHoverColor="#F8E001"
        changeRating={rating => setRating(rating)}
        numberOfStars={5}
        name="rating"
      />
      <div style={{ height: 100 }}>
        {rating && (
          <Link type="button" onClick={postRating} style={{ margin: 30, animation: 'fadeIn', animationDuration: '2s' }}>
            <ButtonPill style={{ padding: '7px 50px' }}>
              <Text size="S" text="SUBMIT" style={{ color: '#FFF' }} bold unique />
            </ButtonPill>
          </Link>
        )}
      </div>
    </PageLayout>
  )
}

export default Feedback
