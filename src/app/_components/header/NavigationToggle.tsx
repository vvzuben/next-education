'use client'
import React from 'react';

function Line() {
  return <span className="w-5 h-0 border-[1.5px] border-white"></span>
}

function HorizontalLines() {
  return <>
    <Line />
    <Line />
    <Line />
  </>
}

function Cross() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L19 19" stroke="#190D1A" strokeWidth="1.5" />
    <path d="M1 19L19 0.999999" stroke="#190D1A" strokeWidth="1.5" />
  </svg>
}

type Props = {
  isMenuOpen: Boolean
  toggleMenu: VoidFunction
}

export default function NavigationToggle(props: Props) {
  return <button onClick={() => props.toggleMenu()} className={(props.isMenuOpen ? 'bg-white' : 'bg-royal-purple') + " flex flex-col items-center justify-center gap-1 w-[48px] h-[48px] rounded-xl px-[9px] py-[5px]"}>
    {!props.isMenuOpen ? <HorizontalLines /> : <Cross />}
  </button>
}
