import React, { useState } from 'react'
import { auth } from 'services/firebase'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const Login = () => {
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(false)

  const handleChange = e => {
    setEmail(e.target.value)
    setValid(/^(?=[a-zA-Z,]*['.-][a-zA-Z,]*$)[a-zA-Z,'.-]+$/.test(e.target.value))
  }

  const submitEmail = async () => {
    try {
      const options = await auth().fetchSignInMethodsForEmail(`${email}@telus.com`)
      if (!options.length) await auth().createUserWithEmailAndPassword(`${email}@telus.com`, `Vr%Jks@c17LTh&z4`)
      await auth().signInWithEmailAndPassword(`${email}@telus.com`, `Vr%Jks@c17LTh&z4`)
    } catch (err) {
      console.error(err.message)
      throw err
    }
  }

  return (
    <PageLayout page="home" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
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
          value={email}
          onChange={handleChange}
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
        {valid && (
          <Link type="button" onClick={submitEmail} style={{ animation: 'fadeIn', animationDuration: '2s' }}>
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
