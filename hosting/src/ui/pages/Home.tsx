import React, { useEffect } from 'react'
import Stars from 'react-star-ratings'
import Cookie from 'js-cookie'
import { db } from 'services/firebase'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import useTelusMe from 'ui/hooks/useTelusMe'
import PageLayout from 'ui/layouts/PageLayout'

const Home = () => {
  const [state, update] = useTelusMe()

  const postRating = async () => {
    let midnight = new Date()
    midnight.setHours(23, 59, 59, 0)
    const [first, last] = state.email.split('.')
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    await db()
      .doc(`ratings/${date}-${state.email}`)
      .set({
        date,
        firstname: first.replace(/[^A-Za-z]+/g, ''),
        lastname: last.replace(/[^A-Za-z]+/g, ''),
        email: `${state.email}@telus.com`,
        rating: state.rating
      })
    Cookie.set('voted', true, { expires: midnight })
    return update({ type: 'page', page: 'thanks' })
  }

  useEffect(() => {
    if (Cookie.get('voted') && state.page === 'login') {
      return update({ type: 'page', page: 'thanks' })
    }
    if (Cookie.get('email') && state.page === 'login') {
      update({ type: 'email', email: Cookie.get('email') })
      return update({ type: 'page', page: 'rating' })
    }
  }, [])

  switch (state.page) {
    case 'rating':
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
            text="HOW WAS YOUR DAY YESTERDAY?"
            style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'helvetica', fontWeight: 100 }}
            bold
            unique
          />
          <Stars
            rating={state.rating || 4}
            starRatedColor="#F8E001"
            starHoverColor="#F8E001"
            changeRating={rating => update({ type: 'rating', rating })}
            numberOfStars={5}
            name="rating"
          />
          <div style={{ height: 100 }}>
            {state.rating && (
              <Link
                type="button"
                onClick={postRating}
                style={{ margin: 30, animation: 'fadeIn', animationDuration: '2s' }}>
                <ButtonPill style={{ padding: '7px 50px' }}>
                  <Text size="S" text="SUBMIT" style={{ color: '#FFF' }} bold unique />
                </ButtonPill>
              </Link>
            )}
          </div>
        </PageLayout>
      )
    case 'thanks':
      return (
        <PageLayout
          page="home"
          crawl={false}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'flipInX',
            animationDuration: '1s'
          }}>
          <img
            src="/images/thanks.png"
            alt="hippo"
            height="300px"
            style={{ animation: 'flipInX', animationDuration: '1s' }}
          />
        </PageLayout>
      )
    default:
      return (
        <PageLayout
          page="home"
          crawl={false}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'flipInX',
            animationDuration: '1s'
          }}>
          <img src="/images/cheetah.png" alt="hippo" height="150px" />
          <img src="/images/logo.png" alt="hippo" height="50px" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20
            }}>
            <input
              type="text"
              value={state.email}
              onChange={e => update({ type: 'email', email: e.target.value })}
              autoFocus
              placeholder="your.name"
              style={{
                textAlign: 'right',
                background: 'transparent',
                border: `2px solid #4B286D`,
                padding: `7px 5px 7px 20px`,
                borderTopLeftRadius: `10px`,
                borderBottomLeftRadius: `10px`
              }}
            />
            <div
              style={{
                background: `#4B286D`,
                padding: `10px 40px 10px 5px`,
                borderTopRightRadius: `10px`,
                borderBottomRightRadius: `10px`
              }}>
              <Text size="S" text="@TELUS.COM" style={{ color: '#FFF' }} unique />
            </div>
          </div>
          <div style={{ height: 50 }}>
            {state.email && (
              <Link
                type="button"
                onClick={() => {
                  Cookie.set('email', state.email, 2147483647)
                  update({ type: 'page', page: 'rating' })
                }}
                style={{ margin: 10, animation: 'fadeIn', animationDuration: '2s' }}>
                <ButtonPill style={{ background: `rgb(43, 128, 0)`, padding: `7px 60px` }}>
                  <Text size="S" text="LOG IN" style={{ color: '#FFF' }} bold unique />
                </ButtonPill>
              </Link>
            )}
          </div>
        </PageLayout>
      )
  }
}

export default Home
