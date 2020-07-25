import React, { useEffect } from 'react'
import Cookie from 'js-cookie'
import { auth } from 'services/firebase'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import useTelusMe from 'ui/hooks/useTelusMe'
import PageLayout from 'ui/layouts/PageLayout'

const Login = () => {
  const [state, update] = useTelusMe()

  const submitEmail = async () => {
    try {
      const options = await auth().fetchSignInMethodsForEmail(`${state.email}@telus.com`)
      console.log(options)
      if (!options.length) await auth().createUserWithEmailAndPassword(`${state.email}@telus.com`, `Vr%Jks@c17LTh&z4`)
      await auth().signInWithEmailAndPassword(`${state.email}@telus.com`, `Vr%Jks@c17LTh&z4`)
    } catch (err) {
      console.error(err.message)
      throw err
    }
  }

  return (
    <PageLayout
      page="home"
      crawl={false}
      style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <img src="/images/cheetah.png" alt="cheetah" style={{ width: `50%`, maxWidth: 150 }} />
      <img src="/images/logo.png" alt="logo" style={{ width: `90%`, maxWidth: 300 }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: `20px 0`,
          width: 200
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
            borderBottomLeftRadius: `10px`,
            width: 150
          }}
        />
        <div
          style={{
            background: `#4B286D`,
            padding: `10px 20px 10px 5px`,
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
            onClick={submitEmail}
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

export default Login
