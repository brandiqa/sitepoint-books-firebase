import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-base-300 text-center py-4">
      <small text="xs light-900" font="light" tracking="wider">
        &copy; Copyright {currentYear} Sitepoint Books. All Rights Reserved
      </small>
    </footer>
  )
}

export default Footer
