import React from 'react'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa'

export const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/tomas-c-keong/',
  },
  { Social: <FaGitlab />, link: 'https://gitlab.com/tomas-keong' },
  { Social: <FaGithub />, link: 'https://github.com/tomas-keong' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/tomas_keong' },
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/tomaskeong' },
]

const Social = (): JSX.Element => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  )
}

export default Social
