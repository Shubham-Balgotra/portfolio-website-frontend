import React from 'react'

const Footer = ({darkMode}) => {
  return (
 <footer
  className={`text-center text-sm p-4 ${
    darkMode ? "bg-black text-gray-300" : "bg-white text-gray-500"
  }`}
>
  &copy; {new Date().getFullYear()} Shubham Balgotra. All rights reserved.
</footer>

  )
}

export default Footer