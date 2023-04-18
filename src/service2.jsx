

export const Getbytoken = async(key)=>{
  localStorage.getItem(key)
}

export const Setbytoken = async(key,value)=>{
  console.log()
  localStorage.setItem(key,value.data.data)
  }