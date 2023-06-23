import { data } from "../page"


function fetchDetails(params){
const newCategories = data.find((detail)=> detail.id === params.slug)
return newCategories
}

export default async function page({params}) {
    const newCategories = fetchDetails(params)
  return (
    <div>this is a slug component page {newCategories.name}</div>
  )
}
