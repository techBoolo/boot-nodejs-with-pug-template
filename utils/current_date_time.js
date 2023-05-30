export default  () => {
  return new Date().toLocaleString(
    undefined, 
    {
      dateStyle: 'medium', 
      timeStyle: 'medium', 
      hour12: false
    }
  )
}

