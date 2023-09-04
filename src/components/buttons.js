import { Button, Link } from '@mui/material'
import React from 'react'

export const Buttons = (props) => {
  return (
    <>
      <Button target="_blank" sx={props.sx} href={props.href} variant={props.variant}>{props.text}</Button>
    </>

  )
}
